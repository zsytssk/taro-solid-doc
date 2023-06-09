import * as path from 'path';

import { lstatFile } from './asyncUtil';

export function normalize(file_path: string) {
  file_path = path.normalize(file_path);
  return file_path.replace(/\\$/, '');
}

export function isSubPath(path_str: string, parent_path: string): boolean {
  const relative = path.relative(parent_path, path_str);
  if (relative === '') {
    return true;
  }
  return Boolean(
    relative && !relative.startsWith('..') && !path.isAbsolute(relative),
  );
}

type FileInfo = {
  type: 'directory' | 'file';
  name: string;
  ext: string;
  parent: string;
};
export async function getFileInfo(file_path: string): Promise<FileInfo> {
  const ls_info = await lstatFile(file_path);
  let type: FileInfo['type'] = 'file';
  let ext: string = '';
  let name: string = '';
  let parent: string = '';
  if (ls_info.isDirectory()) {
    type = 'directory';
    name = path.basename(file_path);
    parent = path.resolve(file_path, '..');
  } else if (ls_info.isFile()) {
    type = 'file';
    ext = path.extname(file_path);
    name = path.basename(file_path).replace(ext, '');
    parent = path.dirname(file_path);
  }

  return {
    type,
    name,
    parent,
    ext,
  };
}

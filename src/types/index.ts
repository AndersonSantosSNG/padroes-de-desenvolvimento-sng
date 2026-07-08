export interface DocRoute {
  id: string;
  title: string;
  fileName: string;
  category: string;
}

export interface DocMetadata {
  id: string;
  createdBy: string;
  createdAt: string;
  lastUpdatedBy: string;
  lastUpdatedAt: string;
  version: string;
}
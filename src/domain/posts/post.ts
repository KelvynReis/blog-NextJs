export type PostID = number;

export type PostAuthor = {
  id: PostID;
  name: string;
  created_by: number;
  updated_by: number;
  createdAt: string;
  updatedAt: string;
};

export type PostCategory = {
  data: PostDataCategory;
};

export type PostDataCategory = {
  id: number;
  attributes: DataCategoryAttributes;
};

export type DataCategoryAttributes = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostAttributesFormat = PostCoverFormat & {
  name: string;
  provider: string;
  created_by: number;
  updated_by: number;
  createdAt: string;
  updatedAt: string;
  formats: formatstype;
};
export type formatstype = {
  large: FormatsTypeData;
  thumbnail: FormatsTypeData;
  small: FormatsTypeData;
  medium: FormatsTypeData;
};

export type FormatsTypeData = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
};
export type PostAttributes = {
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  published_at: string;
  cover: postCover;
  category: PostCategory;
};

export type postCover = {
  data: PostAttributesData;
};

export type PostAttributesData = {
  id: PostID;
  attributes: PostAttributesFormat;
};
export type PostData = {
  id: PostID;
  title: string;
  content: string;
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  created_by: PostCreatedBy;
  updated_by: PostCreatedBy;
  createdAt: string;
  updatedAt: string;
  attributes: PostAttributes;
};

export type PostID = number;

export type PostAuthor = {
  id: PostID;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

export type PostCategory = {
  id: PostID;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
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
  created_at: string;
  updated_at: string;
  formats: formatstype;
};
export type formatstype = {
  thumbnail: FormatsTypeData;
  small: FormatsTypeData;
  medium: FormatsTypeData;
};

export type FormatsTypeData = PostCoverFormat & {
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
  created_at: string;
  updated_at: string;
  published_at: string;
  cover: postCover;
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
  created_at: string;
  updated_at: string;
  attributes: PostAttributes;
};

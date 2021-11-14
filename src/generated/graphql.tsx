import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginResponse;
  register?: Maybe<User>;
};


export type MutationLoginArgs = {
  id: Scalars['String'];
};


export type MutationRegisterArgs = {
  details: UserDetails;
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: Array<User>;
  getUser: Array<User>;
  hello: Scalars['String'];
  payload: Scalars['String'];
};


export type QueryGetUserArgs = {
  details: IdDetails;
};

export type User = {
  __typename?: 'User';
  admin: Scalars['Boolean'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['String'];
  last_name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
};

export type UserDetails = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  picture: Scalars['String'];
};

export type IdDetails = {
  id: Scalars['Float'];
};

export type RegisterMutationVariables = Exact<{
  details: UserDetails;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: Maybe<{ __typename?: 'User', first_name: string, last_name: string, email: string, picture?: Maybe<string> }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', id: string, email: string, first_name: string, last_name: string, picture?: Maybe<string> }> };

export type LoginMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string } };

export type PayloadQueryVariables = Exact<{ [key: string]: never; }>;


export type PayloadQuery = { __typename?: 'Query', payload: string };


export const RegisterDocument = gql`
    mutation Register($details: UserDetails!) {
  register(details: $details) {
    first_name
    last_name
    email
    picture
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const GetAllUsersDocument = gql`
    query getAllUsers {
  getAllUsers {
    id
    email
    first_name
    last_name
    picture
  }
}
    `;

export function useGetAllUsersQuery(options: Omit<Urql.UseQueryArgs<GetAllUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllUsersQuery>({ query: GetAllUsersDocument, ...options });
};
export const LoginDocument = gql`
    mutation Login($id: String!) {
  login(id: $id) {
    accessToken
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const PayloadDocument = gql`
    query payload {
  payload
}
    `;

export function usePayloadQuery(options: Omit<Urql.UseQueryArgs<PayloadQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PayloadQuery>({ query: PayloadDocument, ...options });
};
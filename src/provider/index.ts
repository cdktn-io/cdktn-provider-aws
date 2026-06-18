/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AwsProviderConfig {
  /**
  * The access key for API operations. You can retrieve this
  * from the 'Security & Credentials' section of the AWS console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#access_key AwsProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#allowed_account_ids AwsProvider#allowed_account_ids}
  */
  readonly allowedAccountIds?: string[];
  /**
  * File containing custom root and intermediate certificates. Can also be configured using the `AWS_CA_BUNDLE` environment variable. (Setting `ca_bundle` in the shared config file is not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#custom_ca_bundle AwsProvider#custom_ca_bundle}
  */
  readonly customCaBundle?: string;
  /**
  * Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ec2_metadata_service_endpoint AwsProvider#ec2_metadata_service_endpoint}
  */
  readonly ec2MetadataServiceEndpoint?: string;
  /**
  * Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ec2_metadata_service_endpoint_mode AwsProvider#ec2_metadata_service_endpoint_mode}
  */
  readonly ec2MetadataServiceEndpointMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#forbidden_account_ids AwsProvider#forbidden_account_ids}
  */
  readonly forbiddenAccountIds?: string[];
  /**
  * URL of a proxy to use for HTTP requests when accessing the AWS API. Can also be set using the `HTTP_PROXY` or `http_proxy` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#http_proxy AwsProvider#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * URL of a proxy to use for HTTPS requests when accessing the AWS API. Can also be set using the `HTTPS_PROXY` or `https_proxy` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#https_proxy AwsProvider#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#insecure AwsProvider#insecure}
  */
  readonly insecure?: boolean | cdktn.IResolvable;
  /**
  * The maximum number of times an AWS API request is
  * being executed. If the API request still fails, an error is
  * thrown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#max_retries AwsProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Comma-separated list of hosts that should not use HTTP or HTTPS proxies. Can also be set using the `NO_PROXY` or `no_proxy` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#no_proxy AwsProvider#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * The profile for API operations. If not set, the default profile
  * created with `aws configure` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#profile AwsProvider#profile}
  */
  readonly profile?: string;
  /**
  * The region where AWS operations will take place. Examples
  * are us-east-1, us-west-2, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#region AwsProvider#region}
  */
  readonly region?: string;
  /**
  * Specifies how retries are attempted. Valid values are `standard` and `adaptive`. Can also be configured using the `AWS_RETRY_MODE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#retry_mode AwsProvider#retry_mode}
  */
  readonly retryMode?: string;
  /**
  * Specifies whether S3 API calls in the `us-east-1` region use the legacy global endpoint or a regional endpoint. Valid values are `legacy` or `regional`. Can also be configured using the `AWS_S3_US_EAST_1_REGIONAL_ENDPOINT` environment variable or the `s3_us_east_1_regional_endpoint` shared config file parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#s3_us_east_1_regional_endpoint AwsProvider#s3_us_east_1_regional_endpoint}
  */
  readonly s3UsEast1RegionalEndpoint?: string;
  /**
  * Set this to true to enable the request to use path-style addressing,
  * i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will
  * use virtual hosted bucket addressing when possible
  * (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#s3_use_path_style AwsProvider#s3_use_path_style}
  */
  readonly s3UsePathStyle?: boolean | cdktn.IResolvable;
  /**
  * The secret key for API operations. You can retrieve this
  * from the 'Security & Credentials' section of the AWS console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#secret_key AwsProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * List of paths to shared config files. If not set, defaults to [~/.aws/config].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#shared_config_files AwsProvider#shared_config_files}
  */
  readonly sharedConfigFiles?: string[];
  /**
  * List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#shared_credentials_files AwsProvider#shared_credentials_files}
  */
  readonly sharedCredentialsFiles?: string[];
  /**
  * Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#skip_credentials_validation AwsProvider#skip_credentials_validation}
  */
  readonly skipCredentialsValidation?: boolean | cdktn.IResolvable;
  /**
  * Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#skip_metadata_api_check AwsProvider#skip_metadata_api_check}
  */
  readonly skipMetadataApiCheck?: string;
  /**
  * Skip static validation of region name. Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#skip_region_validation AwsProvider#skip_region_validation}
  */
  readonly skipRegionValidation?: boolean | cdktn.IResolvable;
  /**
  * Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#skip_requesting_account_id AwsProvider#skip_requesting_account_id}
  */
  readonly skipRequestingAccountId?: boolean | cdktn.IResolvable;
  /**
  * The region where AWS STS operations will take place. Examples
  * are us-east-1 and us-west-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#sts_region AwsProvider#sts_region}
  */
  readonly stsRegion?: string;
  /**
  * The severity with which to enforce organizational tagging policies on resources managed by this provider instance. At this time this only includes compliance with required tag keys by resource type. Valid values are "error", "warning", and "disabled". When unset or "disabled", tag policy compliance will not be enforced by the provider. Can also be configured with the TF_AWS_TAG_POLICY_COMPLIANCE environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#tag_policy_compliance AwsProvider#tag_policy_compliance}
  */
  readonly tagPolicyCompliance?: string;
  /**
  * session token. A session token is only required if you are
  * using temporary security credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#token AwsProvider#token}
  */
  readonly token?: string;
  /**
  * The capacity of the AWS SDK's token bucket rate limiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#token_bucket_rate_limiter_capacity AwsProvider#token_bucket_rate_limiter_capacity}
  */
  readonly tokenBucketRateLimiterCapacity?: number;
  /**
  * Resolve an endpoint with DualStack capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#use_dualstack_endpoint AwsProvider#use_dualstack_endpoint}
  */
  readonly useDualstackEndpoint?: boolean | cdktn.IResolvable;
  /**
  * Resolve an endpoint with FIPS capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#use_fips_endpoint AwsProvider#use_fips_endpoint}
  */
  readonly useFipsEndpoint?: boolean | cdktn.IResolvable;
  /**
  * Product details to append to the User-Agent string sent in all AWS API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#user_agent AwsProvider#user_agent}
  */
  readonly userAgent?: string[];
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#alias AwsProvider#alias}
  */
  readonly alias?: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#assume_role AwsProvider#assume_role}
  */
  readonly assumeRole?: AwsProviderAssumeRole[] | cdktn.IResolvable;
  /**
  * assume_role_with_web_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#assume_role_with_web_identity AwsProvider#assume_role_with_web_identity}
  */
  readonly assumeRoleWithWebIdentity?: AwsProviderAssumeRoleWithWebIdentity[] | cdktn.IResolvable;
  /**
  * default_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#default_tags AwsProvider#default_tags}
  */
  readonly defaultTags?: AwsProviderDefaultTags[] | cdktn.IResolvable;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#endpoints AwsProvider#endpoints}
  */
  readonly endpoints?: AwsProviderEndpoints[] | cdktn.IResolvable;
  /**
  * ignore_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ignore_tags AwsProvider#ignore_tags}
  */
  readonly ignoreTags?: AwsProviderIgnoreTags[] | cdktn.IResolvable;
}
export interface AwsProviderAssumeRole {
  /**
  * The duration, between 15 minutes and 12 hours, of the role session. Valid time units are ns, us (or µs), ms, s, h, or m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#duration AwsProvider#duration}
  */
  readonly duration?: string;
  /**
  * A unique identifier that might be required when you assume a role in another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#external_id AwsProvider#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#policy AwsProvider#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#policy_arns AwsProvider#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#role_arn AwsProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * An identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#session_name AwsProvider#session_name}
  */
  readonly sessionName?: string;
  /**
  * Source identity specified by the principal assuming the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#source_identity AwsProvider#source_identity}
  */
  readonly sourceIdentity?: string;
  /**
  * Assume role session tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#tags AwsProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Assume role session tag keys to pass to any subsequent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#transitive_tag_keys AwsProvider#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function awsProviderAssumeRoleToTerraform(struct?: AwsProviderAssumeRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.stringToTerraform(struct!.duration),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    policy: cdktn.stringToTerraform(struct!.policy),
    policy_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.policyArns),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    session_name: cdktn.stringToTerraform(struct!.sessionName),
    source_identity: cdktn.stringToTerraform(struct!.sourceIdentity),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    transitive_tag_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.transitiveTagKeys),
  }
}


export function awsProviderAssumeRoleToHclTerraform(struct?: AwsProviderAssumeRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktn.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.policyArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktn.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_identity: {
      value: cdktn.stringToHclTerraform(struct!.sourceIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    transitive_tag_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.transitiveTagKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AwsProviderAssumeRoleWithWebIdentity {
  /**
  * The duration, between 15 minutes and 12 hours, of the role session. Valid time units are ns, us (or µs), ms, s, h, or m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#duration AwsProvider#duration}
  */
  readonly duration?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#policy AwsProvider#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#policy_arns AwsProvider#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#role_arn AwsProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * An identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#session_name AwsProvider#session_name}
  */
  readonly sessionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#web_identity_token AwsProvider#web_identity_token}
  */
  readonly webIdentityToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#web_identity_token_file AwsProvider#web_identity_token_file}
  */
  readonly webIdentityTokenFile?: string;
}

export function awsProviderAssumeRoleWithWebIdentityToTerraform(struct?: AwsProviderAssumeRoleWithWebIdentity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.stringToTerraform(struct!.duration),
    policy: cdktn.stringToTerraform(struct!.policy),
    policy_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.policyArns),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    session_name: cdktn.stringToTerraform(struct!.sessionName),
    web_identity_token: cdktn.stringToTerraform(struct!.webIdentityToken),
    web_identity_token_file: cdktn.stringToTerraform(struct!.webIdentityTokenFile),
  }
}


export function awsProviderAssumeRoleWithWebIdentityToHclTerraform(struct?: AwsProviderAssumeRoleWithWebIdentity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktn.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.policyArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktn.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_identity_token: {
      value: cdktn.stringToHclTerraform(struct!.webIdentityToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_identity_token_file: {
      value: cdktn.stringToHclTerraform(struct!.webIdentityTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AwsProviderDefaultTags {
  /**
  * Resource tags to default across all resources. Can also be configured with environment variables like `TF_AWS_DEFAULT_TAGS_<tag_name>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#tags AwsProvider#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function awsProviderDefaultTagsToTerraform(struct?: AwsProviderDefaultTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
  }
}


export function awsProviderDefaultTagsToHclTerraform(struct?: AwsProviderDefaultTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AwsProviderEndpoints {
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#accessanalyzer AwsProvider#accessanalyzer}
  */
  readonly accessanalyzer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#account AwsProvider#account}
  */
  readonly account?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#acm AwsProvider#acm}
  */
  readonly acm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#acmpca AwsProvider#acmpca}
  */
  readonly acmpca?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#amg AwsProvider#amg}
  */
  readonly amg?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#amp AwsProvider#amp}
  */
  readonly amp?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#amplify AwsProvider#amplify}
  */
  readonly amplify?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#apigateway AwsProvider#apigateway}
  */
  readonly apigateway?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#apigatewayv2 AwsProvider#apigatewayv2}
  */
  readonly apigatewayv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#appautoscaling AwsProvider#appautoscaling}
  */
  readonly appautoscaling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#appconfig AwsProvider#appconfig}
  */
  readonly appconfig?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#appfabric AwsProvider#appfabric}
  */
  readonly appfabric?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#appflow AwsProvider#appflow}
  */
  readonly appflow?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#appintegrations AwsProvider#appintegrations}
  */
  readonly appintegrations?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#appintegrationsservice AwsProvider#appintegrationsservice}
  */
  readonly appintegrationsservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#applicationautoscaling AwsProvider#applicationautoscaling}
  */
  readonly applicationautoscaling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#applicationinsights AwsProvider#applicationinsights}
  */
  readonly applicationinsights?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#applicationsignals AwsProvider#applicationsignals}
  */
  readonly applicationsignals?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#appmesh AwsProvider#appmesh}
  */
  readonly appmesh?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#appregistry AwsProvider#appregistry}
  */
  readonly appregistry?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#apprunner AwsProvider#apprunner}
  */
  readonly apprunner?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#appstream AwsProvider#appstream}
  */
  readonly appstream?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#appsync AwsProvider#appsync}
  */
  readonly appsync?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#arcregionswitch AwsProvider#arcregionswitch}
  */
  readonly arcregionswitch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#arczonalshift AwsProvider#arczonalshift}
  */
  readonly arczonalshift?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#athena AwsProvider#athena}
  */
  readonly athena?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#auditmanager AwsProvider#auditmanager}
  */
  readonly auditmanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#autoscaling AwsProvider#autoscaling}
  */
  readonly autoscaling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#autoscalingplans AwsProvider#autoscalingplans}
  */
  readonly autoscalingplans?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#backup AwsProvider#backup}
  */
  readonly backup?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#batch AwsProvider#batch}
  */
  readonly batch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#bcmdataexports AwsProvider#bcmdataexports}
  */
  readonly bcmdataexports?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#beanstalk AwsProvider#beanstalk}
  */
  readonly beanstalk?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#bedrock AwsProvider#bedrock}
  */
  readonly bedrock?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#bedrockagent AwsProvider#bedrockagent}
  */
  readonly bedrockagent?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#bedrockagentcore AwsProvider#bedrockagentcore}
  */
  readonly bedrockagentcore?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#billing AwsProvider#billing}
  */
  readonly billing?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#budgets AwsProvider#budgets}
  */
  readonly budgets?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ce AwsProvider#ce}
  */
  readonly ce?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#chatbot AwsProvider#chatbot}
  */
  readonly chatbot?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#chime AwsProvider#chime}
  */
  readonly chime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#chimesdkmediapipelines AwsProvider#chimesdkmediapipelines}
  */
  readonly chimesdkmediapipelines?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#chimesdkvoice AwsProvider#chimesdkvoice}
  */
  readonly chimesdkvoice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cleanrooms AwsProvider#cleanrooms}
  */
  readonly cleanrooms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloud9 AwsProvider#cloud9}
  */
  readonly cloud9?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudcontrol AwsProvider#cloudcontrol}
  */
  readonly cloudcontrol?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudcontrolapi AwsProvider#cloudcontrolapi}
  */
  readonly cloudcontrolapi?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudformation AwsProvider#cloudformation}
  */
  readonly cloudformation?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudfront AwsProvider#cloudfront}
  */
  readonly cloudfront?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudfrontkeyvaluestore AwsProvider#cloudfrontkeyvaluestore}
  */
  readonly cloudfrontkeyvaluestore?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudhsm AwsProvider#cloudhsm}
  */
  readonly cloudhsm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudhsmv2 AwsProvider#cloudhsmv2}
  */
  readonly cloudhsmv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudsearch AwsProvider#cloudsearch}
  */
  readonly cloudsearch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudtrail AwsProvider#cloudtrail}
  */
  readonly cloudtrail?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudwatch AwsProvider#cloudwatch}
  */
  readonly cloudwatch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudwatchevents AwsProvider#cloudwatchevents}
  */
  readonly cloudwatchevents?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudwatchevidently AwsProvider#cloudwatchevidently}
  */
  readonly cloudwatchevidently?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudwatchlog AwsProvider#cloudwatchlog}
  */
  readonly cloudwatchlog?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudwatchlogs AwsProvider#cloudwatchlogs}
  */
  readonly cloudwatchlogs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudwatchobservabilityaccessmanager AwsProvider#cloudwatchobservabilityaccessmanager}
  */
  readonly cloudwatchobservabilityaccessmanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cloudwatchrum AwsProvider#cloudwatchrum}
  */
  readonly cloudwatchrum?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#codeartifact AwsProvider#codeartifact}
  */
  readonly codeartifact?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#codebuild AwsProvider#codebuild}
  */
  readonly codebuild?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#codecatalyst AwsProvider#codecatalyst}
  */
  readonly codecatalyst?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#codecommit AwsProvider#codecommit}
  */
  readonly codecommit?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#codeconnections AwsProvider#codeconnections}
  */
  readonly codeconnections?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#codedeploy AwsProvider#codedeploy}
  */
  readonly codedeploy?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#codeguruprofiler AwsProvider#codeguruprofiler}
  */
  readonly codeguruprofiler?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#codegurureviewer AwsProvider#codegurureviewer}
  */
  readonly codegurureviewer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#codepipeline AwsProvider#codepipeline}
  */
  readonly codepipeline?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#codestarconnections AwsProvider#codestarconnections}
  */
  readonly codestarconnections?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#codestarnotifications AwsProvider#codestarnotifications}
  */
  readonly codestarnotifications?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cognitoidentity AwsProvider#cognitoidentity}
  */
  readonly cognitoidentity?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cognitoidentityprovider AwsProvider#cognitoidentityprovider}
  */
  readonly cognitoidentityprovider?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cognitoidp AwsProvider#cognitoidp}
  */
  readonly cognitoidp?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#comprehend AwsProvider#comprehend}
  */
  readonly comprehend?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#computeoptimizer AwsProvider#computeoptimizer}
  */
  readonly computeoptimizer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#config AwsProvider#config}
  */
  readonly config?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#configservice AwsProvider#configservice}
  */
  readonly configservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#connect AwsProvider#connect}
  */
  readonly connect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#connectcases AwsProvider#connectcases}
  */
  readonly connectcases?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#controltower AwsProvider#controltower}
  */
  readonly controltower?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#costandusagereportservice AwsProvider#costandusagereportservice}
  */
  readonly costandusagereportservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#costexplorer AwsProvider#costexplorer}
  */
  readonly costexplorer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#costoptimizationhub AwsProvider#costoptimizationhub}
  */
  readonly costoptimizationhub?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#cur AwsProvider#cur}
  */
  readonly cur?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#customerprofiles AwsProvider#customerprofiles}
  */
  readonly customerprofiles?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#databasemigration AwsProvider#databasemigration}
  */
  readonly databasemigration?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#databasemigrationservice AwsProvider#databasemigrationservice}
  */
  readonly databasemigrationservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#databrew AwsProvider#databrew}
  */
  readonly databrew?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#dataexchange AwsProvider#dataexchange}
  */
  readonly dataexchange?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#datapipeline AwsProvider#datapipeline}
  */
  readonly datapipeline?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#datasync AwsProvider#datasync}
  */
  readonly datasync?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#datazone AwsProvider#datazone}
  */
  readonly datazone?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#dax AwsProvider#dax}
  */
  readonly dax?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#deploy AwsProvider#deploy}
  */
  readonly deploy?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#detective AwsProvider#detective}
  */
  readonly detective?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#devicefarm AwsProvider#devicefarm}
  */
  readonly devicefarm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#devopsagent AwsProvider#devopsagent}
  */
  readonly devopsagent?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#devopsguru AwsProvider#devopsguru}
  */
  readonly devopsguru?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#directconnect AwsProvider#directconnect}
  */
  readonly directconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#directoryservice AwsProvider#directoryservice}
  */
  readonly directoryservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#dlm AwsProvider#dlm}
  */
  readonly dlm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#dms AwsProvider#dms}
  */
  readonly dms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#docdb AwsProvider#docdb}
  */
  readonly docdb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#docdbelastic AwsProvider#docdbelastic}
  */
  readonly docdbelastic?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#drs AwsProvider#drs}
  */
  readonly drs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ds AwsProvider#ds}
  */
  readonly ds?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#dsql AwsProvider#dsql}
  */
  readonly dsql?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#dynamodb AwsProvider#dynamodb}
  */
  readonly dynamodb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ec2 AwsProvider#ec2}
  */
  readonly ec2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ecr AwsProvider#ecr}
  */
  readonly ecr?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ecrpublic AwsProvider#ecrpublic}
  */
  readonly ecrpublic?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ecs AwsProvider#ecs}
  */
  readonly ecs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#efs AwsProvider#efs}
  */
  readonly efs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#eks AwsProvider#eks}
  */
  readonly eks?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#elasticache AwsProvider#elasticache}
  */
  readonly elasticache?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#elasticbeanstalk AwsProvider#elasticbeanstalk}
  */
  readonly elasticbeanstalk?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#elasticloadbalancing AwsProvider#elasticloadbalancing}
  */
  readonly elasticloadbalancing?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#elasticloadbalancingv2 AwsProvider#elasticloadbalancingv2}
  */
  readonly elasticloadbalancingv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#elasticsearch AwsProvider#elasticsearch}
  */
  readonly elasticsearch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#elasticsearchservice AwsProvider#elasticsearchservice}
  */
  readonly elasticsearchservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#elastictranscoder AwsProvider#elastictranscoder}
  */
  readonly elastictranscoder?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#elb AwsProvider#elb}
  */
  readonly elb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#elbv2 AwsProvider#elbv2}
  */
  readonly elbv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#emr AwsProvider#emr}
  */
  readonly emr?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#emrcontainers AwsProvider#emrcontainers}
  */
  readonly emrcontainers?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#emrserverless AwsProvider#emrserverless}
  */
  readonly emrserverless?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#es AwsProvider#es}
  */
  readonly es?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#eventbridge AwsProvider#eventbridge}
  */
  readonly eventbridge?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#events AwsProvider#events}
  */
  readonly events?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#evidently AwsProvider#evidently}
  */
  readonly evidently?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#evs AwsProvider#evs}
  */
  readonly evs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#finspace AwsProvider#finspace}
  */
  readonly finspace?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#firehose AwsProvider#firehose}
  */
  readonly firehose?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#fis AwsProvider#fis}
  */
  readonly fis?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#fms AwsProvider#fms}
  */
  readonly fms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#fsx AwsProvider#fsx}
  */
  readonly fsx?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#gamelift AwsProvider#gamelift}
  */
  readonly gamelift?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#glacier AwsProvider#glacier}
  */
  readonly glacier?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#globalaccelerator AwsProvider#globalaccelerator}
  */
  readonly globalaccelerator?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#glue AwsProvider#glue}
  */
  readonly glue?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#gluedatabrew AwsProvider#gluedatabrew}
  */
  readonly gluedatabrew?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#grafana AwsProvider#grafana}
  */
  readonly grafana?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#greengrass AwsProvider#greengrass}
  */
  readonly greengrass?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#groundstation AwsProvider#groundstation}
  */
  readonly groundstation?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#guardduty AwsProvider#guardduty}
  */
  readonly guardduty?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#healthlake AwsProvider#healthlake}
  */
  readonly healthlake?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#iam AwsProvider#iam}
  */
  readonly iam?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#identitystore AwsProvider#identitystore}
  */
  readonly identitystore?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#imagebuilder AwsProvider#imagebuilder}
  */
  readonly imagebuilder?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#inspector AwsProvider#inspector}
  */
  readonly inspector?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#inspector2 AwsProvider#inspector2}
  */
  readonly inspector2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#inspectorv2 AwsProvider#inspectorv2}
  */
  readonly inspectorv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#interconnect AwsProvider#interconnect}
  */
  readonly interconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#internetmonitor AwsProvider#internetmonitor}
  */
  readonly internetmonitor?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#invoicing AwsProvider#invoicing}
  */
  readonly invoicing?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#iot AwsProvider#iot}
  */
  readonly iot?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ivs AwsProvider#ivs}
  */
  readonly ivs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ivschat AwsProvider#ivschat}
  */
  readonly ivschat?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#kafka AwsProvider#kafka}
  */
  readonly kafka?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#kafkaconnect AwsProvider#kafkaconnect}
  */
  readonly kafkaconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#kendra AwsProvider#kendra}
  */
  readonly kendra?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#keyspaces AwsProvider#keyspaces}
  */
  readonly keyspaces?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#kinesis AwsProvider#kinesis}
  */
  readonly kinesis?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#kinesisanalytics AwsProvider#kinesisanalytics}
  */
  readonly kinesisanalytics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#kinesisanalyticsv2 AwsProvider#kinesisanalyticsv2}
  */
  readonly kinesisanalyticsv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#kinesisvideo AwsProvider#kinesisvideo}
  */
  readonly kinesisvideo?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#kms AwsProvider#kms}
  */
  readonly kms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#lakeformation AwsProvider#lakeformation}
  */
  readonly lakeformation?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#lambda AwsProvider#lambda}
  */
  readonly lambda?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#launchwizard AwsProvider#launchwizard}
  */
  readonly launchwizard?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#lex AwsProvider#lex}
  */
  readonly lex?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#lexmodelbuilding AwsProvider#lexmodelbuilding}
  */
  readonly lexmodelbuilding?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#lexmodelbuildingservice AwsProvider#lexmodelbuildingservice}
  */
  readonly lexmodelbuildingservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#lexmodels AwsProvider#lexmodels}
  */
  readonly lexmodels?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#lexmodelsv2 AwsProvider#lexmodelsv2}
  */
  readonly lexmodelsv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#lexv2models AwsProvider#lexv2models}
  */
  readonly lexv2Models?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#licensemanager AwsProvider#licensemanager}
  */
  readonly licensemanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#lightsail AwsProvider#lightsail}
  */
  readonly lightsail?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#location AwsProvider#location}
  */
  readonly location?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#locationservice AwsProvider#locationservice}
  */
  readonly locationservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#logs AwsProvider#logs}
  */
  readonly logs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#m2 AwsProvider#m2}
  */
  readonly m2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#macie2 AwsProvider#macie2}
  */
  readonly macie2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#managedgrafana AwsProvider#managedgrafana}
  */
  readonly managedgrafana?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#mediaconnect AwsProvider#mediaconnect}
  */
  readonly mediaconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#mediaconvert AwsProvider#mediaconvert}
  */
  readonly mediaconvert?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#medialive AwsProvider#medialive}
  */
  readonly medialive?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#mediapackage AwsProvider#mediapackage}
  */
  readonly mediapackage?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#mediapackagev2 AwsProvider#mediapackagev2}
  */
  readonly mediapackagev2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#mediapackagevod AwsProvider#mediapackagevod}
  */
  readonly mediapackagevod?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#mediastore AwsProvider#mediastore}
  */
  readonly mediastore?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#memorydb AwsProvider#memorydb}
  */
  readonly memorydb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#mgn AwsProvider#mgn}
  */
  readonly mgn?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#mpa AwsProvider#mpa}
  */
  readonly mpa?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#mq AwsProvider#mq}
  */
  readonly mq?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#msk AwsProvider#msk}
  */
  readonly msk?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#mwaa AwsProvider#mwaa}
  */
  readonly mwaa?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#mwaaserverless AwsProvider#mwaaserverless}
  */
  readonly mwaaserverless?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#neptune AwsProvider#neptune}
  */
  readonly neptune?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#neptunegraph AwsProvider#neptunegraph}
  */
  readonly neptunegraph?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#networkfirewall AwsProvider#networkfirewall}
  */
  readonly networkfirewall?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#networkflowmonitor AwsProvider#networkflowmonitor}
  */
  readonly networkflowmonitor?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#networkmanager AwsProvider#networkmanager}
  */
  readonly networkmanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#networkmonitor AwsProvider#networkmonitor}
  */
  readonly networkmonitor?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#notifications AwsProvider#notifications}
  */
  readonly notifications?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#notificationscontacts AwsProvider#notificationscontacts}
  */
  readonly notificationscontacts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#oam AwsProvider#oam}
  */
  readonly oam?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#observabilityadmin AwsProvider#observabilityadmin}
  */
  readonly observabilityadmin?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#odb AwsProvider#odb}
  */
  readonly odb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#opensearch AwsProvider#opensearch}
  */
  readonly opensearch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#opensearchingestion AwsProvider#opensearchingestion}
  */
  readonly opensearchingestion?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#opensearchserverless AwsProvider#opensearchserverless}
  */
  readonly opensearchserverless?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#opensearchservice AwsProvider#opensearchservice}
  */
  readonly opensearchservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#organizations AwsProvider#organizations}
  */
  readonly organizations?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#osis AwsProvider#osis}
  */
  readonly osis?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#outposts AwsProvider#outposts}
  */
  readonly outposts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#paymentcryptography AwsProvider#paymentcryptography}
  */
  readonly paymentcryptography?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#pcaconnectorad AwsProvider#pcaconnectorad}
  */
  readonly pcaconnectorad?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#pcs AwsProvider#pcs}
  */
  readonly pcs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#pinpoint AwsProvider#pinpoint}
  */
  readonly pinpoint?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#pinpointsmsvoicev2 AwsProvider#pinpointsmsvoicev2}
  */
  readonly pinpointsmsvoicev2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#pipes AwsProvider#pipes}
  */
  readonly pipes?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#polly AwsProvider#polly}
  */
  readonly polly?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#pricing AwsProvider#pricing}
  */
  readonly pricing?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#prometheus AwsProvider#prometheus}
  */
  readonly prometheus?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#prometheusservice AwsProvider#prometheusservice}
  */
  readonly prometheusservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#qbusiness AwsProvider#qbusiness}
  */
  readonly qbusiness?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#qldb AwsProvider#qldb}
  */
  readonly qldb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#quicksight AwsProvider#quicksight}
  */
  readonly quicksight?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ram AwsProvider#ram}
  */
  readonly ram?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#rbin AwsProvider#rbin}
  */
  readonly rbin?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#rds AwsProvider#rds}
  */
  readonly rds?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#rdsdata AwsProvider#rdsdata}
  */
  readonly rdsdata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#rdsdataservice AwsProvider#rdsdataservice}
  */
  readonly rdsdataservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#recyclebin AwsProvider#recyclebin}
  */
  readonly recyclebin?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#redshift AwsProvider#redshift}
  */
  readonly redshift?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#redshiftdata AwsProvider#redshiftdata}
  */
  readonly redshiftdata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#redshiftdataapiservice AwsProvider#redshiftdataapiservice}
  */
  readonly redshiftdataapiservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#redshiftserverless AwsProvider#redshiftserverless}
  */
  readonly redshiftserverless?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#rekognition AwsProvider#rekognition}
  */
  readonly rekognition?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#resiliencehub AwsProvider#resiliencehub}
  */
  readonly resiliencehub?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#resourceexplorer2 AwsProvider#resourceexplorer2}
  */
  readonly resourceexplorer2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#resourcegroups AwsProvider#resourcegroups}
  */
  readonly resourcegroups?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#resourcegroupstagging AwsProvider#resourcegroupstagging}
  */
  readonly resourcegroupstagging?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#resourcegroupstaggingapi AwsProvider#resourcegroupstaggingapi}
  */
  readonly resourcegroupstaggingapi?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#rolesanywhere AwsProvider#rolesanywhere}
  */
  readonly rolesanywhere?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#route53 AwsProvider#route53}
  */
  readonly route53?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#route53domains AwsProvider#route53domains}
  */
  readonly route53Domains?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#route53profiles AwsProvider#route53profiles}
  */
  readonly route53Profiles?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#route53recoverycontrolconfig AwsProvider#route53recoverycontrolconfig}
  */
  readonly route53Recoverycontrolconfig?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#route53recoveryreadiness AwsProvider#route53recoveryreadiness}
  */
  readonly route53Recoveryreadiness?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#route53resolver AwsProvider#route53resolver}
  */
  readonly route53Resolver?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#rum AwsProvider#rum}
  */
  readonly rum?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#s3 AwsProvider#s3}
  */
  readonly s3?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#s3api AwsProvider#s3api}
  */
  readonly s3Api?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#s3control AwsProvider#s3control}
  */
  readonly s3Control?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#s3files AwsProvider#s3files}
  */
  readonly s3Files?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#s3outposts AwsProvider#s3outposts}
  */
  readonly s3Outposts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#s3tables AwsProvider#s3tables}
  */
  readonly s3Tables?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#s3vectors AwsProvider#s3vectors}
  */
  readonly s3Vectors?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#sagemaker AwsProvider#sagemaker}
  */
  readonly sagemaker?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#savingsplans AwsProvider#savingsplans}
  */
  readonly savingsplans?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#scheduler AwsProvider#scheduler}
  */
  readonly scheduler?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#schemas AwsProvider#schemas}
  */
  readonly schemas?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#secretsmanager AwsProvider#secretsmanager}
  */
  readonly secretsmanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#securityhub AwsProvider#securityhub}
  */
  readonly securityhub?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#securitylake AwsProvider#securitylake}
  */
  readonly securitylake?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#serverlessapplicationrepository AwsProvider#serverlessapplicationrepository}
  */
  readonly serverlessapplicationrepository?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#serverlessapprepo AwsProvider#serverlessapprepo}
  */
  readonly serverlessapprepo?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#serverlessrepo AwsProvider#serverlessrepo}
  */
  readonly serverlessrepo?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#servicecatalog AwsProvider#servicecatalog}
  */
  readonly servicecatalog?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#servicecatalogappregistry AwsProvider#servicecatalogappregistry}
  */
  readonly servicecatalogappregistry?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#servicediscovery AwsProvider#servicediscovery}
  */
  readonly servicediscovery?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#servicequotas AwsProvider#servicequotas}
  */
  readonly servicequotas?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ses AwsProvider#ses}
  */
  readonly ses?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#sesv2 AwsProvider#sesv2}
  */
  readonly sesv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#sfn AwsProvider#sfn}
  */
  readonly sfn?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#shield AwsProvider#shield}
  */
  readonly shield?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#signer AwsProvider#signer}
  */
  readonly signer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#sns AwsProvider#sns}
  */
  readonly sns?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#sqs AwsProvider#sqs}
  */
  readonly sqs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ssm AwsProvider#ssm}
  */
  readonly ssm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ssmcontacts AwsProvider#ssmcontacts}
  */
  readonly ssmcontacts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ssmincidents AwsProvider#ssmincidents}
  */
  readonly ssmincidents?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ssmquicksetup AwsProvider#ssmquicksetup}
  */
  readonly ssmquicksetup?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ssmsap AwsProvider#ssmsap}
  */
  readonly ssmsap?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#sso AwsProvider#sso}
  */
  readonly sso?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#ssoadmin AwsProvider#ssoadmin}
  */
  readonly ssoadmin?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#stepfunctions AwsProvider#stepfunctions}
  */
  readonly stepfunctions?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#storagegateway AwsProvider#storagegateway}
  */
  readonly storagegateway?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#sts AwsProvider#sts}
  */
  readonly sts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#swf AwsProvider#swf}
  */
  readonly swf?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#synthetics AwsProvider#synthetics}
  */
  readonly synthetics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#taxsettings AwsProvider#taxsettings}
  */
  readonly taxsettings?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#timestreaminfluxdb AwsProvider#timestreaminfluxdb}
  */
  readonly timestreaminfluxdb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#timestreamquery AwsProvider#timestreamquery}
  */
  readonly timestreamquery?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#timestreamwrite AwsProvider#timestreamwrite}
  */
  readonly timestreamwrite?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#transcribe AwsProvider#transcribe}
  */
  readonly transcribe?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#transcribeservice AwsProvider#transcribeservice}
  */
  readonly transcribeservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#transfer AwsProvider#transfer}
  */
  readonly transfer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#uxc AwsProvider#uxc}
  */
  readonly uxc?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#verifiedpermissions AwsProvider#verifiedpermissions}
  */
  readonly verifiedpermissions?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#vpclattice AwsProvider#vpclattice}
  */
  readonly vpclattice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#waf AwsProvider#waf}
  */
  readonly waf?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#wafregional AwsProvider#wafregional}
  */
  readonly wafregional?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#wafv2 AwsProvider#wafv2}
  */
  readonly wafv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#wellarchitected AwsProvider#wellarchitected}
  */
  readonly wellarchitected?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#workmail AwsProvider#workmail}
  */
  readonly workmail?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#workspaces AwsProvider#workspaces}
  */
  readonly workspaces?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#workspacesweb AwsProvider#workspacesweb}
  */
  readonly workspacesweb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#xray AwsProvider#xray}
  */
  readonly xray?: string;
}

export function awsProviderEndpointsToTerraform(struct?: AwsProviderEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accessanalyzer: cdktn.stringToTerraform(struct!.accessanalyzer),
    account: cdktn.stringToTerraform(struct!.account),
    acm: cdktn.stringToTerraform(struct!.acm),
    acmpca: cdktn.stringToTerraform(struct!.acmpca),
    amg: cdktn.stringToTerraform(struct!.amg),
    amp: cdktn.stringToTerraform(struct!.amp),
    amplify: cdktn.stringToTerraform(struct!.amplify),
    apigateway: cdktn.stringToTerraform(struct!.apigateway),
    apigatewayv2: cdktn.stringToTerraform(struct!.apigatewayv2),
    appautoscaling: cdktn.stringToTerraform(struct!.appautoscaling),
    appconfig: cdktn.stringToTerraform(struct!.appconfig),
    appfabric: cdktn.stringToTerraform(struct!.appfabric),
    appflow: cdktn.stringToTerraform(struct!.appflow),
    appintegrations: cdktn.stringToTerraform(struct!.appintegrations),
    appintegrationsservice: cdktn.stringToTerraform(struct!.appintegrationsservice),
    applicationautoscaling: cdktn.stringToTerraform(struct!.applicationautoscaling),
    applicationinsights: cdktn.stringToTerraform(struct!.applicationinsights),
    applicationsignals: cdktn.stringToTerraform(struct!.applicationsignals),
    appmesh: cdktn.stringToTerraform(struct!.appmesh),
    appregistry: cdktn.stringToTerraform(struct!.appregistry),
    apprunner: cdktn.stringToTerraform(struct!.apprunner),
    appstream: cdktn.stringToTerraform(struct!.appstream),
    appsync: cdktn.stringToTerraform(struct!.appsync),
    arcregionswitch: cdktn.stringToTerraform(struct!.arcregionswitch),
    arczonalshift: cdktn.stringToTerraform(struct!.arczonalshift),
    athena: cdktn.stringToTerraform(struct!.athena),
    auditmanager: cdktn.stringToTerraform(struct!.auditmanager),
    autoscaling: cdktn.stringToTerraform(struct!.autoscaling),
    autoscalingplans: cdktn.stringToTerraform(struct!.autoscalingplans),
    backup: cdktn.stringToTerraform(struct!.backup),
    batch: cdktn.stringToTerraform(struct!.batch),
    bcmdataexports: cdktn.stringToTerraform(struct!.bcmdataexports),
    beanstalk: cdktn.stringToTerraform(struct!.beanstalk),
    bedrock: cdktn.stringToTerraform(struct!.bedrock),
    bedrockagent: cdktn.stringToTerraform(struct!.bedrockagent),
    bedrockagentcore: cdktn.stringToTerraform(struct!.bedrockagentcore),
    billing: cdktn.stringToTerraform(struct!.billing),
    budgets: cdktn.stringToTerraform(struct!.budgets),
    ce: cdktn.stringToTerraform(struct!.ce),
    chatbot: cdktn.stringToTerraform(struct!.chatbot),
    chime: cdktn.stringToTerraform(struct!.chime),
    chimesdkmediapipelines: cdktn.stringToTerraform(struct!.chimesdkmediapipelines),
    chimesdkvoice: cdktn.stringToTerraform(struct!.chimesdkvoice),
    cleanrooms: cdktn.stringToTerraform(struct!.cleanrooms),
    cloud9: cdktn.stringToTerraform(struct!.cloud9),
    cloudcontrol: cdktn.stringToTerraform(struct!.cloudcontrol),
    cloudcontrolapi: cdktn.stringToTerraform(struct!.cloudcontrolapi),
    cloudformation: cdktn.stringToTerraform(struct!.cloudformation),
    cloudfront: cdktn.stringToTerraform(struct!.cloudfront),
    cloudfrontkeyvaluestore: cdktn.stringToTerraform(struct!.cloudfrontkeyvaluestore),
    cloudhsm: cdktn.stringToTerraform(struct!.cloudhsm),
    cloudhsmv2: cdktn.stringToTerraform(struct!.cloudhsmv2),
    cloudsearch: cdktn.stringToTerraform(struct!.cloudsearch),
    cloudtrail: cdktn.stringToTerraform(struct!.cloudtrail),
    cloudwatch: cdktn.stringToTerraform(struct!.cloudwatch),
    cloudwatchevents: cdktn.stringToTerraform(struct!.cloudwatchevents),
    cloudwatchevidently: cdktn.stringToTerraform(struct!.cloudwatchevidently),
    cloudwatchlog: cdktn.stringToTerraform(struct!.cloudwatchlog),
    cloudwatchlogs: cdktn.stringToTerraform(struct!.cloudwatchlogs),
    cloudwatchobservabilityaccessmanager: cdktn.stringToTerraform(struct!.cloudwatchobservabilityaccessmanager),
    cloudwatchrum: cdktn.stringToTerraform(struct!.cloudwatchrum),
    codeartifact: cdktn.stringToTerraform(struct!.codeartifact),
    codebuild: cdktn.stringToTerraform(struct!.codebuild),
    codecatalyst: cdktn.stringToTerraform(struct!.codecatalyst),
    codecommit: cdktn.stringToTerraform(struct!.codecommit),
    codeconnections: cdktn.stringToTerraform(struct!.codeconnections),
    codedeploy: cdktn.stringToTerraform(struct!.codedeploy),
    codeguruprofiler: cdktn.stringToTerraform(struct!.codeguruprofiler),
    codegurureviewer: cdktn.stringToTerraform(struct!.codegurureviewer),
    codepipeline: cdktn.stringToTerraform(struct!.codepipeline),
    codestarconnections: cdktn.stringToTerraform(struct!.codestarconnections),
    codestarnotifications: cdktn.stringToTerraform(struct!.codestarnotifications),
    cognitoidentity: cdktn.stringToTerraform(struct!.cognitoidentity),
    cognitoidentityprovider: cdktn.stringToTerraform(struct!.cognitoidentityprovider),
    cognitoidp: cdktn.stringToTerraform(struct!.cognitoidp),
    comprehend: cdktn.stringToTerraform(struct!.comprehend),
    computeoptimizer: cdktn.stringToTerraform(struct!.computeoptimizer),
    config: cdktn.stringToTerraform(struct!.config),
    configservice: cdktn.stringToTerraform(struct!.configservice),
    connect: cdktn.stringToTerraform(struct!.connect),
    connectcases: cdktn.stringToTerraform(struct!.connectcases),
    controltower: cdktn.stringToTerraform(struct!.controltower),
    costandusagereportservice: cdktn.stringToTerraform(struct!.costandusagereportservice),
    costexplorer: cdktn.stringToTerraform(struct!.costexplorer),
    costoptimizationhub: cdktn.stringToTerraform(struct!.costoptimizationhub),
    cur: cdktn.stringToTerraform(struct!.cur),
    customerprofiles: cdktn.stringToTerraform(struct!.customerprofiles),
    databasemigration: cdktn.stringToTerraform(struct!.databasemigration),
    databasemigrationservice: cdktn.stringToTerraform(struct!.databasemigrationservice),
    databrew: cdktn.stringToTerraform(struct!.databrew),
    dataexchange: cdktn.stringToTerraform(struct!.dataexchange),
    datapipeline: cdktn.stringToTerraform(struct!.datapipeline),
    datasync: cdktn.stringToTerraform(struct!.datasync),
    datazone: cdktn.stringToTerraform(struct!.datazone),
    dax: cdktn.stringToTerraform(struct!.dax),
    deploy: cdktn.stringToTerraform(struct!.deploy),
    detective: cdktn.stringToTerraform(struct!.detective),
    devicefarm: cdktn.stringToTerraform(struct!.devicefarm),
    devopsagent: cdktn.stringToTerraform(struct!.devopsagent),
    devopsguru: cdktn.stringToTerraform(struct!.devopsguru),
    directconnect: cdktn.stringToTerraform(struct!.directconnect),
    directoryservice: cdktn.stringToTerraform(struct!.directoryservice),
    dlm: cdktn.stringToTerraform(struct!.dlm),
    dms: cdktn.stringToTerraform(struct!.dms),
    docdb: cdktn.stringToTerraform(struct!.docdb),
    docdbelastic: cdktn.stringToTerraform(struct!.docdbelastic),
    drs: cdktn.stringToTerraform(struct!.drs),
    ds: cdktn.stringToTerraform(struct!.ds),
    dsql: cdktn.stringToTerraform(struct!.dsql),
    dynamodb: cdktn.stringToTerraform(struct!.dynamodb),
    ec2: cdktn.stringToTerraform(struct!.ec2),
    ecr: cdktn.stringToTerraform(struct!.ecr),
    ecrpublic: cdktn.stringToTerraform(struct!.ecrpublic),
    ecs: cdktn.stringToTerraform(struct!.ecs),
    efs: cdktn.stringToTerraform(struct!.efs),
    eks: cdktn.stringToTerraform(struct!.eks),
    elasticache: cdktn.stringToTerraform(struct!.elasticache),
    elasticbeanstalk: cdktn.stringToTerraform(struct!.elasticbeanstalk),
    elasticloadbalancing: cdktn.stringToTerraform(struct!.elasticloadbalancing),
    elasticloadbalancingv2: cdktn.stringToTerraform(struct!.elasticloadbalancingv2),
    elasticsearch: cdktn.stringToTerraform(struct!.elasticsearch),
    elasticsearchservice: cdktn.stringToTerraform(struct!.elasticsearchservice),
    elastictranscoder: cdktn.stringToTerraform(struct!.elastictranscoder),
    elb: cdktn.stringToTerraform(struct!.elb),
    elbv2: cdktn.stringToTerraform(struct!.elbv2),
    emr: cdktn.stringToTerraform(struct!.emr),
    emrcontainers: cdktn.stringToTerraform(struct!.emrcontainers),
    emrserverless: cdktn.stringToTerraform(struct!.emrserverless),
    es: cdktn.stringToTerraform(struct!.es),
    eventbridge: cdktn.stringToTerraform(struct!.eventbridge),
    events: cdktn.stringToTerraform(struct!.events),
    evidently: cdktn.stringToTerraform(struct!.evidently),
    evs: cdktn.stringToTerraform(struct!.evs),
    finspace: cdktn.stringToTerraform(struct!.finspace),
    firehose: cdktn.stringToTerraform(struct!.firehose),
    fis: cdktn.stringToTerraform(struct!.fis),
    fms: cdktn.stringToTerraform(struct!.fms),
    fsx: cdktn.stringToTerraform(struct!.fsx),
    gamelift: cdktn.stringToTerraform(struct!.gamelift),
    glacier: cdktn.stringToTerraform(struct!.glacier),
    globalaccelerator: cdktn.stringToTerraform(struct!.globalaccelerator),
    glue: cdktn.stringToTerraform(struct!.glue),
    gluedatabrew: cdktn.stringToTerraform(struct!.gluedatabrew),
    grafana: cdktn.stringToTerraform(struct!.grafana),
    greengrass: cdktn.stringToTerraform(struct!.greengrass),
    groundstation: cdktn.stringToTerraform(struct!.groundstation),
    guardduty: cdktn.stringToTerraform(struct!.guardduty),
    healthlake: cdktn.stringToTerraform(struct!.healthlake),
    iam: cdktn.stringToTerraform(struct!.iam),
    identitystore: cdktn.stringToTerraform(struct!.identitystore),
    imagebuilder: cdktn.stringToTerraform(struct!.imagebuilder),
    inspector: cdktn.stringToTerraform(struct!.inspector),
    inspector2: cdktn.stringToTerraform(struct!.inspector2),
    inspectorv2: cdktn.stringToTerraform(struct!.inspectorv2),
    interconnect: cdktn.stringToTerraform(struct!.interconnect),
    internetmonitor: cdktn.stringToTerraform(struct!.internetmonitor),
    invoicing: cdktn.stringToTerraform(struct!.invoicing),
    iot: cdktn.stringToTerraform(struct!.iot),
    ivs: cdktn.stringToTerraform(struct!.ivs),
    ivschat: cdktn.stringToTerraform(struct!.ivschat),
    kafka: cdktn.stringToTerraform(struct!.kafka),
    kafkaconnect: cdktn.stringToTerraform(struct!.kafkaconnect),
    kendra: cdktn.stringToTerraform(struct!.kendra),
    keyspaces: cdktn.stringToTerraform(struct!.keyspaces),
    kinesis: cdktn.stringToTerraform(struct!.kinesis),
    kinesisanalytics: cdktn.stringToTerraform(struct!.kinesisanalytics),
    kinesisanalyticsv2: cdktn.stringToTerraform(struct!.kinesisanalyticsv2),
    kinesisvideo: cdktn.stringToTerraform(struct!.kinesisvideo),
    kms: cdktn.stringToTerraform(struct!.kms),
    lakeformation: cdktn.stringToTerraform(struct!.lakeformation),
    lambda: cdktn.stringToTerraform(struct!.lambda),
    launchwizard: cdktn.stringToTerraform(struct!.launchwizard),
    lex: cdktn.stringToTerraform(struct!.lex),
    lexmodelbuilding: cdktn.stringToTerraform(struct!.lexmodelbuilding),
    lexmodelbuildingservice: cdktn.stringToTerraform(struct!.lexmodelbuildingservice),
    lexmodels: cdktn.stringToTerraform(struct!.lexmodels),
    lexmodelsv2: cdktn.stringToTerraform(struct!.lexmodelsv2),
    lexv2models: cdktn.stringToTerraform(struct!.lexv2Models),
    licensemanager: cdktn.stringToTerraform(struct!.licensemanager),
    lightsail: cdktn.stringToTerraform(struct!.lightsail),
    location: cdktn.stringToTerraform(struct!.location),
    locationservice: cdktn.stringToTerraform(struct!.locationservice),
    logs: cdktn.stringToTerraform(struct!.logs),
    m2: cdktn.stringToTerraform(struct!.m2),
    macie2: cdktn.stringToTerraform(struct!.macie2),
    managedgrafana: cdktn.stringToTerraform(struct!.managedgrafana),
    mediaconnect: cdktn.stringToTerraform(struct!.mediaconnect),
    mediaconvert: cdktn.stringToTerraform(struct!.mediaconvert),
    medialive: cdktn.stringToTerraform(struct!.medialive),
    mediapackage: cdktn.stringToTerraform(struct!.mediapackage),
    mediapackagev2: cdktn.stringToTerraform(struct!.mediapackagev2),
    mediapackagevod: cdktn.stringToTerraform(struct!.mediapackagevod),
    mediastore: cdktn.stringToTerraform(struct!.mediastore),
    memorydb: cdktn.stringToTerraform(struct!.memorydb),
    mgn: cdktn.stringToTerraform(struct!.mgn),
    mpa: cdktn.stringToTerraform(struct!.mpa),
    mq: cdktn.stringToTerraform(struct!.mq),
    msk: cdktn.stringToTerraform(struct!.msk),
    mwaa: cdktn.stringToTerraform(struct!.mwaa),
    mwaaserverless: cdktn.stringToTerraform(struct!.mwaaserverless),
    neptune: cdktn.stringToTerraform(struct!.neptune),
    neptunegraph: cdktn.stringToTerraform(struct!.neptunegraph),
    networkfirewall: cdktn.stringToTerraform(struct!.networkfirewall),
    networkflowmonitor: cdktn.stringToTerraform(struct!.networkflowmonitor),
    networkmanager: cdktn.stringToTerraform(struct!.networkmanager),
    networkmonitor: cdktn.stringToTerraform(struct!.networkmonitor),
    notifications: cdktn.stringToTerraform(struct!.notifications),
    notificationscontacts: cdktn.stringToTerraform(struct!.notificationscontacts),
    oam: cdktn.stringToTerraform(struct!.oam),
    observabilityadmin: cdktn.stringToTerraform(struct!.observabilityadmin),
    odb: cdktn.stringToTerraform(struct!.odb),
    opensearch: cdktn.stringToTerraform(struct!.opensearch),
    opensearchingestion: cdktn.stringToTerraform(struct!.opensearchingestion),
    opensearchserverless: cdktn.stringToTerraform(struct!.opensearchserverless),
    opensearchservice: cdktn.stringToTerraform(struct!.opensearchservice),
    organizations: cdktn.stringToTerraform(struct!.organizations),
    osis: cdktn.stringToTerraform(struct!.osis),
    outposts: cdktn.stringToTerraform(struct!.outposts),
    paymentcryptography: cdktn.stringToTerraform(struct!.paymentcryptography),
    pcaconnectorad: cdktn.stringToTerraform(struct!.pcaconnectorad),
    pcs: cdktn.stringToTerraform(struct!.pcs),
    pinpoint: cdktn.stringToTerraform(struct!.pinpoint),
    pinpointsmsvoicev2: cdktn.stringToTerraform(struct!.pinpointsmsvoicev2),
    pipes: cdktn.stringToTerraform(struct!.pipes),
    polly: cdktn.stringToTerraform(struct!.polly),
    pricing: cdktn.stringToTerraform(struct!.pricing),
    prometheus: cdktn.stringToTerraform(struct!.prometheus),
    prometheusservice: cdktn.stringToTerraform(struct!.prometheusservice),
    qbusiness: cdktn.stringToTerraform(struct!.qbusiness),
    qldb: cdktn.stringToTerraform(struct!.qldb),
    quicksight: cdktn.stringToTerraform(struct!.quicksight),
    ram: cdktn.stringToTerraform(struct!.ram),
    rbin: cdktn.stringToTerraform(struct!.rbin),
    rds: cdktn.stringToTerraform(struct!.rds),
    rdsdata: cdktn.stringToTerraform(struct!.rdsdata),
    rdsdataservice: cdktn.stringToTerraform(struct!.rdsdataservice),
    recyclebin: cdktn.stringToTerraform(struct!.recyclebin),
    redshift: cdktn.stringToTerraform(struct!.redshift),
    redshiftdata: cdktn.stringToTerraform(struct!.redshiftdata),
    redshiftdataapiservice: cdktn.stringToTerraform(struct!.redshiftdataapiservice),
    redshiftserverless: cdktn.stringToTerraform(struct!.redshiftserverless),
    rekognition: cdktn.stringToTerraform(struct!.rekognition),
    resiliencehub: cdktn.stringToTerraform(struct!.resiliencehub),
    resourceexplorer2: cdktn.stringToTerraform(struct!.resourceexplorer2),
    resourcegroups: cdktn.stringToTerraform(struct!.resourcegroups),
    resourcegroupstagging: cdktn.stringToTerraform(struct!.resourcegroupstagging),
    resourcegroupstaggingapi: cdktn.stringToTerraform(struct!.resourcegroupstaggingapi),
    rolesanywhere: cdktn.stringToTerraform(struct!.rolesanywhere),
    route53: cdktn.stringToTerraform(struct!.route53),
    route53domains: cdktn.stringToTerraform(struct!.route53Domains),
    route53profiles: cdktn.stringToTerraform(struct!.route53Profiles),
    route53recoverycontrolconfig: cdktn.stringToTerraform(struct!.route53Recoverycontrolconfig),
    route53recoveryreadiness: cdktn.stringToTerraform(struct!.route53Recoveryreadiness),
    route53resolver: cdktn.stringToTerraform(struct!.route53Resolver),
    rum: cdktn.stringToTerraform(struct!.rum),
    s3: cdktn.stringToTerraform(struct!.s3),
    s3api: cdktn.stringToTerraform(struct!.s3Api),
    s3control: cdktn.stringToTerraform(struct!.s3Control),
    s3files: cdktn.stringToTerraform(struct!.s3Files),
    s3outposts: cdktn.stringToTerraform(struct!.s3Outposts),
    s3tables: cdktn.stringToTerraform(struct!.s3Tables),
    s3vectors: cdktn.stringToTerraform(struct!.s3Vectors),
    sagemaker: cdktn.stringToTerraform(struct!.sagemaker),
    savingsplans: cdktn.stringToTerraform(struct!.savingsplans),
    scheduler: cdktn.stringToTerraform(struct!.scheduler),
    schemas: cdktn.stringToTerraform(struct!.schemas),
    secretsmanager: cdktn.stringToTerraform(struct!.secretsmanager),
    securityhub: cdktn.stringToTerraform(struct!.securityhub),
    securitylake: cdktn.stringToTerraform(struct!.securitylake),
    serverlessapplicationrepository: cdktn.stringToTerraform(struct!.serverlessapplicationrepository),
    serverlessapprepo: cdktn.stringToTerraform(struct!.serverlessapprepo),
    serverlessrepo: cdktn.stringToTerraform(struct!.serverlessrepo),
    servicecatalog: cdktn.stringToTerraform(struct!.servicecatalog),
    servicecatalogappregistry: cdktn.stringToTerraform(struct!.servicecatalogappregistry),
    servicediscovery: cdktn.stringToTerraform(struct!.servicediscovery),
    servicequotas: cdktn.stringToTerraform(struct!.servicequotas),
    ses: cdktn.stringToTerraform(struct!.ses),
    sesv2: cdktn.stringToTerraform(struct!.sesv2),
    sfn: cdktn.stringToTerraform(struct!.sfn),
    shield: cdktn.stringToTerraform(struct!.shield),
    signer: cdktn.stringToTerraform(struct!.signer),
    sns: cdktn.stringToTerraform(struct!.sns),
    sqs: cdktn.stringToTerraform(struct!.sqs),
    ssm: cdktn.stringToTerraform(struct!.ssm),
    ssmcontacts: cdktn.stringToTerraform(struct!.ssmcontacts),
    ssmincidents: cdktn.stringToTerraform(struct!.ssmincidents),
    ssmquicksetup: cdktn.stringToTerraform(struct!.ssmquicksetup),
    ssmsap: cdktn.stringToTerraform(struct!.ssmsap),
    sso: cdktn.stringToTerraform(struct!.sso),
    ssoadmin: cdktn.stringToTerraform(struct!.ssoadmin),
    stepfunctions: cdktn.stringToTerraform(struct!.stepfunctions),
    storagegateway: cdktn.stringToTerraform(struct!.storagegateway),
    sts: cdktn.stringToTerraform(struct!.sts),
    swf: cdktn.stringToTerraform(struct!.swf),
    synthetics: cdktn.stringToTerraform(struct!.synthetics),
    taxsettings: cdktn.stringToTerraform(struct!.taxsettings),
    timestreaminfluxdb: cdktn.stringToTerraform(struct!.timestreaminfluxdb),
    timestreamquery: cdktn.stringToTerraform(struct!.timestreamquery),
    timestreamwrite: cdktn.stringToTerraform(struct!.timestreamwrite),
    transcribe: cdktn.stringToTerraform(struct!.transcribe),
    transcribeservice: cdktn.stringToTerraform(struct!.transcribeservice),
    transfer: cdktn.stringToTerraform(struct!.transfer),
    uxc: cdktn.stringToTerraform(struct!.uxc),
    verifiedpermissions: cdktn.stringToTerraform(struct!.verifiedpermissions),
    vpclattice: cdktn.stringToTerraform(struct!.vpclattice),
    waf: cdktn.stringToTerraform(struct!.waf),
    wafregional: cdktn.stringToTerraform(struct!.wafregional),
    wafv2: cdktn.stringToTerraform(struct!.wafv2),
    wellarchitected: cdktn.stringToTerraform(struct!.wellarchitected),
    workmail: cdktn.stringToTerraform(struct!.workmail),
    workspaces: cdktn.stringToTerraform(struct!.workspaces),
    workspacesweb: cdktn.stringToTerraform(struct!.workspacesweb),
    xray: cdktn.stringToTerraform(struct!.xray),
  }
}


export function awsProviderEndpointsToHclTerraform(struct?: AwsProviderEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accessanalyzer: {
      value: cdktn.stringToHclTerraform(struct!.accessanalyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account: {
      value: cdktn.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acm: {
      value: cdktn.stringToHclTerraform(struct!.acm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acmpca: {
      value: cdktn.stringToHclTerraform(struct!.acmpca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amg: {
      value: cdktn.stringToHclTerraform(struct!.amg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amp: {
      value: cdktn.stringToHclTerraform(struct!.amp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amplify: {
      value: cdktn.stringToHclTerraform(struct!.amplify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apigateway: {
      value: cdktn.stringToHclTerraform(struct!.apigateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apigatewayv2: {
      value: cdktn.stringToHclTerraform(struct!.apigatewayv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appautoscaling: {
      value: cdktn.stringToHclTerraform(struct!.appautoscaling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appconfig: {
      value: cdktn.stringToHclTerraform(struct!.appconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appfabric: {
      value: cdktn.stringToHclTerraform(struct!.appfabric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appflow: {
      value: cdktn.stringToHclTerraform(struct!.appflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appintegrations: {
      value: cdktn.stringToHclTerraform(struct!.appintegrations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appintegrationsservice: {
      value: cdktn.stringToHclTerraform(struct!.appintegrationsservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applicationautoscaling: {
      value: cdktn.stringToHclTerraform(struct!.applicationautoscaling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applicationinsights: {
      value: cdktn.stringToHclTerraform(struct!.applicationinsights),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applicationsignals: {
      value: cdktn.stringToHclTerraform(struct!.applicationsignals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appmesh: {
      value: cdktn.stringToHclTerraform(struct!.appmesh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appregistry: {
      value: cdktn.stringToHclTerraform(struct!.appregistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apprunner: {
      value: cdktn.stringToHclTerraform(struct!.apprunner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appstream: {
      value: cdktn.stringToHclTerraform(struct!.appstream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appsync: {
      value: cdktn.stringToHclTerraform(struct!.appsync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arcregionswitch: {
      value: cdktn.stringToHclTerraform(struct!.arcregionswitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arczonalshift: {
      value: cdktn.stringToHclTerraform(struct!.arczonalshift),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    athena: {
      value: cdktn.stringToHclTerraform(struct!.athena),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auditmanager: {
      value: cdktn.stringToHclTerraform(struct!.auditmanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaling: {
      value: cdktn.stringToHclTerraform(struct!.autoscaling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscalingplans: {
      value: cdktn.stringToHclTerraform(struct!.autoscalingplans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup: {
      value: cdktn.stringToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch: {
      value: cdktn.stringToHclTerraform(struct!.batch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bcmdataexports: {
      value: cdktn.stringToHclTerraform(struct!.bcmdataexports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    beanstalk: {
      value: cdktn.stringToHclTerraform(struct!.beanstalk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bedrock: {
      value: cdktn.stringToHclTerraform(struct!.bedrock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bedrockagent: {
      value: cdktn.stringToHclTerraform(struct!.bedrockagent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bedrockagentcore: {
      value: cdktn.stringToHclTerraform(struct!.bedrockagentcore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    billing: {
      value: cdktn.stringToHclTerraform(struct!.billing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    budgets: {
      value: cdktn.stringToHclTerraform(struct!.budgets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ce: {
      value: cdktn.stringToHclTerraform(struct!.ce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chatbot: {
      value: cdktn.stringToHclTerraform(struct!.chatbot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chime: {
      value: cdktn.stringToHclTerraform(struct!.chime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chimesdkmediapipelines: {
      value: cdktn.stringToHclTerraform(struct!.chimesdkmediapipelines),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chimesdkvoice: {
      value: cdktn.stringToHclTerraform(struct!.chimesdkvoice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cleanrooms: {
      value: cdktn.stringToHclTerraform(struct!.cleanrooms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud9: {
      value: cdktn.stringToHclTerraform(struct!.cloud9),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudcontrol: {
      value: cdktn.stringToHclTerraform(struct!.cloudcontrol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudcontrolapi: {
      value: cdktn.stringToHclTerraform(struct!.cloudcontrolapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudformation: {
      value: cdktn.stringToHclTerraform(struct!.cloudformation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudfront: {
      value: cdktn.stringToHclTerraform(struct!.cloudfront),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudfrontkeyvaluestore: {
      value: cdktn.stringToHclTerraform(struct!.cloudfrontkeyvaluestore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudhsm: {
      value: cdktn.stringToHclTerraform(struct!.cloudhsm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudhsmv2: {
      value: cdktn.stringToHclTerraform(struct!.cloudhsmv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudsearch: {
      value: cdktn.stringToHclTerraform(struct!.cloudsearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudtrail: {
      value: cdktn.stringToHclTerraform(struct!.cloudtrail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchevents: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchevents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchevidently: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchevidently),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchlog: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchlog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchlogs: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchlogs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchobservabilityaccessmanager: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchobservabilityaccessmanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchrum: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchrum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codeartifact: {
      value: cdktn.stringToHclTerraform(struct!.codeartifact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codebuild: {
      value: cdktn.stringToHclTerraform(struct!.codebuild),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codecatalyst: {
      value: cdktn.stringToHclTerraform(struct!.codecatalyst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codecommit: {
      value: cdktn.stringToHclTerraform(struct!.codecommit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codeconnections: {
      value: cdktn.stringToHclTerraform(struct!.codeconnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codedeploy: {
      value: cdktn.stringToHclTerraform(struct!.codedeploy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codeguruprofiler: {
      value: cdktn.stringToHclTerraform(struct!.codeguruprofiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codegurureviewer: {
      value: cdktn.stringToHclTerraform(struct!.codegurureviewer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codepipeline: {
      value: cdktn.stringToHclTerraform(struct!.codepipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codestarconnections: {
      value: cdktn.stringToHclTerraform(struct!.codestarconnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codestarnotifications: {
      value: cdktn.stringToHclTerraform(struct!.codestarnotifications),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cognitoidentity: {
      value: cdktn.stringToHclTerraform(struct!.cognitoidentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cognitoidentityprovider: {
      value: cdktn.stringToHclTerraform(struct!.cognitoidentityprovider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cognitoidp: {
      value: cdktn.stringToHclTerraform(struct!.cognitoidp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comprehend: {
      value: cdktn.stringToHclTerraform(struct!.comprehend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    computeoptimizer: {
      value: cdktn.stringToHclTerraform(struct!.computeoptimizer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktn.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configservice: {
      value: cdktn.stringToHclTerraform(struct!.configservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect: {
      value: cdktn.stringToHclTerraform(struct!.connect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connectcases: {
      value: cdktn.stringToHclTerraform(struct!.connectcases),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controltower: {
      value: cdktn.stringToHclTerraform(struct!.controltower),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    costandusagereportservice: {
      value: cdktn.stringToHclTerraform(struct!.costandusagereportservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    costexplorer: {
      value: cdktn.stringToHclTerraform(struct!.costexplorer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    costoptimizationhub: {
      value: cdktn.stringToHclTerraform(struct!.costoptimizationhub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cur: {
      value: cdktn.stringToHclTerraform(struct!.cur),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customerprofiles: {
      value: cdktn.stringToHclTerraform(struct!.customerprofiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databasemigration: {
      value: cdktn.stringToHclTerraform(struct!.databasemigration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databasemigrationservice: {
      value: cdktn.stringToHclTerraform(struct!.databasemigrationservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databrew: {
      value: cdktn.stringToHclTerraform(struct!.databrew),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataexchange: {
      value: cdktn.stringToHclTerraform(struct!.dataexchange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datapipeline: {
      value: cdktn.stringToHclTerraform(struct!.datapipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasync: {
      value: cdktn.stringToHclTerraform(struct!.datasync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datazone: {
      value: cdktn.stringToHclTerraform(struct!.datazone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dax: {
      value: cdktn.stringToHclTerraform(struct!.dax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deploy: {
      value: cdktn.stringToHclTerraform(struct!.deploy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detective: {
      value: cdktn.stringToHclTerraform(struct!.detective),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devicefarm: {
      value: cdktn.stringToHclTerraform(struct!.devicefarm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devopsagent: {
      value: cdktn.stringToHclTerraform(struct!.devopsagent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devopsguru: {
      value: cdktn.stringToHclTerraform(struct!.devopsguru),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directconnect: {
      value: cdktn.stringToHclTerraform(struct!.directconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directoryservice: {
      value: cdktn.stringToHclTerraform(struct!.directoryservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dlm: {
      value: cdktn.stringToHclTerraform(struct!.dlm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dms: {
      value: cdktn.stringToHclTerraform(struct!.dms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docdb: {
      value: cdktn.stringToHclTerraform(struct!.docdb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docdbelastic: {
      value: cdktn.stringToHclTerraform(struct!.docdbelastic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs: {
      value: cdktn.stringToHclTerraform(struct!.drs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ds: {
      value: cdktn.stringToHclTerraform(struct!.ds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dsql: {
      value: cdktn.stringToHclTerraform(struct!.dsql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamodb: {
      value: cdktn.stringToHclTerraform(struct!.dynamodb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ec2: {
      value: cdktn.stringToHclTerraform(struct!.ec2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ecr: {
      value: cdktn.stringToHclTerraform(struct!.ecr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ecrpublic: {
      value: cdktn.stringToHclTerraform(struct!.ecrpublic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ecs: {
      value: cdktn.stringToHclTerraform(struct!.ecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    efs: {
      value: cdktn.stringToHclTerraform(struct!.efs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eks: {
      value: cdktn.stringToHclTerraform(struct!.eks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticache: {
      value: cdktn.stringToHclTerraform(struct!.elasticache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticbeanstalk: {
      value: cdktn.stringToHclTerraform(struct!.elasticbeanstalk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticloadbalancing: {
      value: cdktn.stringToHclTerraform(struct!.elasticloadbalancing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticloadbalancingv2: {
      value: cdktn.stringToHclTerraform(struct!.elasticloadbalancingv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticsearch: {
      value: cdktn.stringToHclTerraform(struct!.elasticsearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticsearchservice: {
      value: cdktn.stringToHclTerraform(struct!.elasticsearchservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elastictranscoder: {
      value: cdktn.stringToHclTerraform(struct!.elastictranscoder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elb: {
      value: cdktn.stringToHclTerraform(struct!.elb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elbv2: {
      value: cdktn.stringToHclTerraform(struct!.elbv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emr: {
      value: cdktn.stringToHclTerraform(struct!.emr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emrcontainers: {
      value: cdktn.stringToHclTerraform(struct!.emrcontainers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emrserverless: {
      value: cdktn.stringToHclTerraform(struct!.emrserverless),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    es: {
      value: cdktn.stringToHclTerraform(struct!.es),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eventbridge: {
      value: cdktn.stringToHclTerraform(struct!.eventbridge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    events: {
      value: cdktn.stringToHclTerraform(struct!.events),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evidently: {
      value: cdktn.stringToHclTerraform(struct!.evidently),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evs: {
      value: cdktn.stringToHclTerraform(struct!.evs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    finspace: {
      value: cdktn.stringToHclTerraform(struct!.finspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firehose: {
      value: cdktn.stringToHclTerraform(struct!.firehose),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fis: {
      value: cdktn.stringToHclTerraform(struct!.fis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fms: {
      value: cdktn.stringToHclTerraform(struct!.fms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fsx: {
      value: cdktn.stringToHclTerraform(struct!.fsx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gamelift: {
      value: cdktn.stringToHclTerraform(struct!.gamelift),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glacier: {
      value: cdktn.stringToHclTerraform(struct!.glacier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalaccelerator: {
      value: cdktn.stringToHclTerraform(struct!.globalaccelerator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glue: {
      value: cdktn.stringToHclTerraform(struct!.glue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gluedatabrew: {
      value: cdktn.stringToHclTerraform(struct!.gluedatabrew),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grafana: {
      value: cdktn.stringToHclTerraform(struct!.grafana),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    greengrass: {
      value: cdktn.stringToHclTerraform(struct!.greengrass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groundstation: {
      value: cdktn.stringToHclTerraform(struct!.groundstation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guardduty: {
      value: cdktn.stringToHclTerraform(struct!.guardduty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    healthlake: {
      value: cdktn.stringToHclTerraform(struct!.healthlake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam: {
      value: cdktn.stringToHclTerraform(struct!.iam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identitystore: {
      value: cdktn.stringToHclTerraform(struct!.identitystore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagebuilder: {
      value: cdktn.stringToHclTerraform(struct!.imagebuilder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspector: {
      value: cdktn.stringToHclTerraform(struct!.inspector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspector2: {
      value: cdktn.stringToHclTerraform(struct!.inspector2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspectorv2: {
      value: cdktn.stringToHclTerraform(struct!.inspectorv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interconnect: {
      value: cdktn.stringToHclTerraform(struct!.interconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internetmonitor: {
      value: cdktn.stringToHclTerraform(struct!.internetmonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invoicing: {
      value: cdktn.stringToHclTerraform(struct!.invoicing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iot: {
      value: cdktn.stringToHclTerraform(struct!.iot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ivs: {
      value: cdktn.stringToHclTerraform(struct!.ivs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ivschat: {
      value: cdktn.stringToHclTerraform(struct!.ivschat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka: {
      value: cdktn.stringToHclTerraform(struct!.kafka),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafkaconnect: {
      value: cdktn.stringToHclTerraform(struct!.kafkaconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kendra: {
      value: cdktn.stringToHclTerraform(struct!.kendra),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyspaces: {
      value: cdktn.stringToHclTerraform(struct!.keyspaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesis: {
      value: cdktn.stringToHclTerraform(struct!.kinesis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesisanalytics: {
      value: cdktn.stringToHclTerraform(struct!.kinesisanalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesisanalyticsv2: {
      value: cdktn.stringToHclTerraform(struct!.kinesisanalyticsv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesisvideo: {
      value: cdktn.stringToHclTerraform(struct!.kinesisvideo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms: {
      value: cdktn.stringToHclTerraform(struct!.kms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lakeformation: {
      value: cdktn.stringToHclTerraform(struct!.lakeformation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda: {
      value: cdktn.stringToHclTerraform(struct!.lambda),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launchwizard: {
      value: cdktn.stringToHclTerraform(struct!.launchwizard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lex: {
      value: cdktn.stringToHclTerraform(struct!.lex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexmodelbuilding: {
      value: cdktn.stringToHclTerraform(struct!.lexmodelbuilding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexmodelbuildingservice: {
      value: cdktn.stringToHclTerraform(struct!.lexmodelbuildingservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexmodels: {
      value: cdktn.stringToHclTerraform(struct!.lexmodels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexmodelsv2: {
      value: cdktn.stringToHclTerraform(struct!.lexmodelsv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexv2models: {
      value: cdktn.stringToHclTerraform(struct!.lexv2Models),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    licensemanager: {
      value: cdktn.stringToHclTerraform(struct!.licensemanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lightsail: {
      value: cdktn.stringToHclTerraform(struct!.lightsail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locationservice: {
      value: cdktn.stringToHclTerraform(struct!.locationservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logs: {
      value: cdktn.stringToHclTerraform(struct!.logs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    m2: {
      value: cdktn.stringToHclTerraform(struct!.m2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macie2: {
      value: cdktn.stringToHclTerraform(struct!.macie2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managedgrafana: {
      value: cdktn.stringToHclTerraform(struct!.managedgrafana),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediaconnect: {
      value: cdktn.stringToHclTerraform(struct!.mediaconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediaconvert: {
      value: cdktn.stringToHclTerraform(struct!.mediaconvert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    medialive: {
      value: cdktn.stringToHclTerraform(struct!.medialive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediapackage: {
      value: cdktn.stringToHclTerraform(struct!.mediapackage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediapackagev2: {
      value: cdktn.stringToHclTerraform(struct!.mediapackagev2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediapackagevod: {
      value: cdktn.stringToHclTerraform(struct!.mediapackagevod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediastore: {
      value: cdktn.stringToHclTerraform(struct!.mediastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memorydb: {
      value: cdktn.stringToHclTerraform(struct!.memorydb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgn: {
      value: cdktn.stringToHclTerraform(struct!.mgn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mpa: {
      value: cdktn.stringToHclTerraform(struct!.mpa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mq: {
      value: cdktn.stringToHclTerraform(struct!.mq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msk: {
      value: cdktn.stringToHclTerraform(struct!.msk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mwaa: {
      value: cdktn.stringToHclTerraform(struct!.mwaa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mwaaserverless: {
      value: cdktn.stringToHclTerraform(struct!.mwaaserverless),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neptune: {
      value: cdktn.stringToHclTerraform(struct!.neptune),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neptunegraph: {
      value: cdktn.stringToHclTerraform(struct!.neptunegraph),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networkfirewall: {
      value: cdktn.stringToHclTerraform(struct!.networkfirewall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networkflowmonitor: {
      value: cdktn.stringToHclTerraform(struct!.networkflowmonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networkmanager: {
      value: cdktn.stringToHclTerraform(struct!.networkmanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networkmonitor: {
      value: cdktn.stringToHclTerraform(struct!.networkmonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notifications: {
      value: cdktn.stringToHclTerraform(struct!.notifications),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notificationscontacts: {
      value: cdktn.stringToHclTerraform(struct!.notificationscontacts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oam: {
      value: cdktn.stringToHclTerraform(struct!.oam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    observabilityadmin: {
      value: cdktn.stringToHclTerraform(struct!.observabilityadmin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    odb: {
      value: cdktn.stringToHclTerraform(struct!.odb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opensearch: {
      value: cdktn.stringToHclTerraform(struct!.opensearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opensearchingestion: {
      value: cdktn.stringToHclTerraform(struct!.opensearchingestion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opensearchserverless: {
      value: cdktn.stringToHclTerraform(struct!.opensearchserverless),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opensearchservice: {
      value: cdktn.stringToHclTerraform(struct!.opensearchservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizations: {
      value: cdktn.stringToHclTerraform(struct!.organizations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    osis: {
      value: cdktn.stringToHclTerraform(struct!.osis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outposts: {
      value: cdktn.stringToHclTerraform(struct!.outposts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paymentcryptography: {
      value: cdktn.stringToHclTerraform(struct!.paymentcryptography),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pcaconnectorad: {
      value: cdktn.stringToHclTerraform(struct!.pcaconnectorad),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pcs: {
      value: cdktn.stringToHclTerraform(struct!.pcs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pinpoint: {
      value: cdktn.stringToHclTerraform(struct!.pinpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pinpointsmsvoicev2: {
      value: cdktn.stringToHclTerraform(struct!.pinpointsmsvoicev2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipes: {
      value: cdktn.stringToHclTerraform(struct!.pipes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polly: {
      value: cdktn.stringToHclTerraform(struct!.polly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pricing: {
      value: cdktn.stringToHclTerraform(struct!.pricing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus: {
      value: cdktn.stringToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheusservice: {
      value: cdktn.stringToHclTerraform(struct!.prometheusservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qbusiness: {
      value: cdktn.stringToHclTerraform(struct!.qbusiness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qldb: {
      value: cdktn.stringToHclTerraform(struct!.qldb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quicksight: {
      value: cdktn.stringToHclTerraform(struct!.quicksight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram: {
      value: cdktn.stringToHclTerraform(struct!.ram),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rbin: {
      value: cdktn.stringToHclTerraform(struct!.rbin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rds: {
      value: cdktn.stringToHclTerraform(struct!.rds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdsdata: {
      value: cdktn.stringToHclTerraform(struct!.rdsdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdsdataservice: {
      value: cdktn.stringToHclTerraform(struct!.rdsdataservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recyclebin: {
      value: cdktn.stringToHclTerraform(struct!.recyclebin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshift: {
      value: cdktn.stringToHclTerraform(struct!.redshift),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshiftdata: {
      value: cdktn.stringToHclTerraform(struct!.redshiftdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshiftdataapiservice: {
      value: cdktn.stringToHclTerraform(struct!.redshiftdataapiservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshiftserverless: {
      value: cdktn.stringToHclTerraform(struct!.redshiftserverless),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rekognition: {
      value: cdktn.stringToHclTerraform(struct!.rekognition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resiliencehub: {
      value: cdktn.stringToHclTerraform(struct!.resiliencehub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourceexplorer2: {
      value: cdktn.stringToHclTerraform(struct!.resourceexplorer2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcegroups: {
      value: cdktn.stringToHclTerraform(struct!.resourcegroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcegroupstagging: {
      value: cdktn.stringToHclTerraform(struct!.resourcegroupstagging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcegroupstaggingapi: {
      value: cdktn.stringToHclTerraform(struct!.resourcegroupstaggingapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rolesanywhere: {
      value: cdktn.stringToHclTerraform(struct!.rolesanywhere),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53: {
      value: cdktn.stringToHclTerraform(struct!.route53),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53domains: {
      value: cdktn.stringToHclTerraform(struct!.route53Domains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53profiles: {
      value: cdktn.stringToHclTerraform(struct!.route53Profiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53recoverycontrolconfig: {
      value: cdktn.stringToHclTerraform(struct!.route53Recoverycontrolconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53recoveryreadiness: {
      value: cdktn.stringToHclTerraform(struct!.route53Recoveryreadiness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53resolver: {
      value: cdktn.stringToHclTerraform(struct!.route53Resolver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rum: {
      value: cdktn.stringToHclTerraform(struct!.rum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: cdktn.stringToHclTerraform(struct!.s3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3api: {
      value: cdktn.stringToHclTerraform(struct!.s3Api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3control: {
      value: cdktn.stringToHclTerraform(struct!.s3Control),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3files: {
      value: cdktn.stringToHclTerraform(struct!.s3Files),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3outposts: {
      value: cdktn.stringToHclTerraform(struct!.s3Outposts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3tables: {
      value: cdktn.stringToHclTerraform(struct!.s3Tables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3vectors: {
      value: cdktn.stringToHclTerraform(struct!.s3Vectors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker: {
      value: cdktn.stringToHclTerraform(struct!.sagemaker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    savingsplans: {
      value: cdktn.stringToHclTerraform(struct!.savingsplans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler: {
      value: cdktn.stringToHclTerraform(struct!.scheduler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schemas: {
      value: cdktn.stringToHclTerraform(struct!.schemas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secretsmanager: {
      value: cdktn.stringToHclTerraform(struct!.secretsmanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    securityhub: {
      value: cdktn.stringToHclTerraform(struct!.securityhub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    securitylake: {
      value: cdktn.stringToHclTerraform(struct!.securitylake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serverlessapplicationrepository: {
      value: cdktn.stringToHclTerraform(struct!.serverlessapplicationrepository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serverlessapprepo: {
      value: cdktn.stringToHclTerraform(struct!.serverlessapprepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serverlessrepo: {
      value: cdktn.stringToHclTerraform(struct!.serverlessrepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servicecatalog: {
      value: cdktn.stringToHclTerraform(struct!.servicecatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servicecatalogappregistry: {
      value: cdktn.stringToHclTerraform(struct!.servicecatalogappregistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servicediscovery: {
      value: cdktn.stringToHclTerraform(struct!.servicediscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servicequotas: {
      value: cdktn.stringToHclTerraform(struct!.servicequotas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ses: {
      value: cdktn.stringToHclTerraform(struct!.ses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sesv2: {
      value: cdktn.stringToHclTerraform(struct!.sesv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sfn: {
      value: cdktn.stringToHclTerraform(struct!.sfn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shield: {
      value: cdktn.stringToHclTerraform(struct!.shield),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signer: {
      value: cdktn.stringToHclTerraform(struct!.signer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns: {
      value: cdktn.stringToHclTerraform(struct!.sns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqs: {
      value: cdktn.stringToHclTerraform(struct!.sqs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssm: {
      value: cdktn.stringToHclTerraform(struct!.ssm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssmcontacts: {
      value: cdktn.stringToHclTerraform(struct!.ssmcontacts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssmincidents: {
      value: cdktn.stringToHclTerraform(struct!.ssmincidents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssmquicksetup: {
      value: cdktn.stringToHclTerraform(struct!.ssmquicksetup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssmsap: {
      value: cdktn.stringToHclTerraform(struct!.ssmsap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso: {
      value: cdktn.stringToHclTerraform(struct!.sso),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssoadmin: {
      value: cdktn.stringToHclTerraform(struct!.ssoadmin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stepfunctions: {
      value: cdktn.stringToHclTerraform(struct!.stepfunctions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storagegateway: {
      value: cdktn.stringToHclTerraform(struct!.storagegateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sts: {
      value: cdktn.stringToHclTerraform(struct!.sts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    swf: {
      value: cdktn.stringToHclTerraform(struct!.swf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synthetics: {
      value: cdktn.stringToHclTerraform(struct!.synthetics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taxsettings: {
      value: cdktn.stringToHclTerraform(struct!.taxsettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestreaminfluxdb: {
      value: cdktn.stringToHclTerraform(struct!.timestreaminfluxdb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestreamquery: {
      value: cdktn.stringToHclTerraform(struct!.timestreamquery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestreamwrite: {
      value: cdktn.stringToHclTerraform(struct!.timestreamwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transcribe: {
      value: cdktn.stringToHclTerraform(struct!.transcribe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transcribeservice: {
      value: cdktn.stringToHclTerraform(struct!.transcribeservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transfer: {
      value: cdktn.stringToHclTerraform(struct!.transfer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uxc: {
      value: cdktn.stringToHclTerraform(struct!.uxc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verifiedpermissions: {
      value: cdktn.stringToHclTerraform(struct!.verifiedpermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpclattice: {
      value: cdktn.stringToHclTerraform(struct!.vpclattice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf: {
      value: cdktn.stringToHclTerraform(struct!.waf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wafregional: {
      value: cdktn.stringToHclTerraform(struct!.wafregional),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wafv2: {
      value: cdktn.stringToHclTerraform(struct!.wafv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wellarchitected: {
      value: cdktn.stringToHclTerraform(struct!.wellarchitected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workmail: {
      value: cdktn.stringToHclTerraform(struct!.workmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspaces: {
      value: cdktn.stringToHclTerraform(struct!.workspaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspacesweb: {
      value: cdktn.stringToHclTerraform(struct!.workspacesweb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xray: {
      value: cdktn.stringToHclTerraform(struct!.xray),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AwsProviderIgnoreTags {
  /**
  * Resource tag key prefixes to ignore across all resources. Can also be configured with the TF_AWS_IGNORE_TAGS_KEY_PREFIXES environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#key_prefixes AwsProvider#key_prefixes}
  */
  readonly keyPrefixes?: string[];
  /**
  * Resource tag keys to ignore across all resources. Can also be configured with the TF_AWS_IGNORE_TAGS_KEYS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#keys AwsProvider#keys}
  */
  readonly keys?: string[];
}

export function awsProviderIgnoreTagsToTerraform(struct?: AwsProviderIgnoreTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.keyPrefixes),
    keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.keys),
  }
}


export function awsProviderIgnoreTagsToHclTerraform(struct?: AwsProviderIgnoreTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_prefixes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.keyPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs aws}
*/
export class AwsProvider extends cdktn.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsProvider to import
  * @param importFromId The id of the existing AwsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.51.0',
        providerVersionConstraint: '~> 6.0'
      },
      terraformProviderSource: 'hashicorp/aws'
    });
    this._accessKey = config.accessKey;
    this._allowedAccountIds = config.allowedAccountIds;
    this._customCaBundle = config.customCaBundle;
    this._ec2MetadataServiceEndpoint = config.ec2MetadataServiceEndpoint;
    this._ec2MetadataServiceEndpointMode = config.ec2MetadataServiceEndpointMode;
    this._forbiddenAccountIds = config.forbiddenAccountIds;
    this._httpProxy = config.httpProxy;
    this._httpsProxy = config.httpsProxy;
    this._insecure = config.insecure;
    this._maxRetries = config.maxRetries;
    this._noProxy = config.noProxy;
    this._profile = config.profile;
    this._region = config.region;
    this._retryMode = config.retryMode;
    this._s3UsEast1RegionalEndpoint = config.s3UsEast1RegionalEndpoint;
    this._s3UsePathStyle = config.s3UsePathStyle;
    this._secretKey = config.secretKey;
    this._sharedConfigFiles = config.sharedConfigFiles;
    this._sharedCredentialsFiles = config.sharedCredentialsFiles;
    this._skipCredentialsValidation = config.skipCredentialsValidation;
    this._skipMetadataApiCheck = config.skipMetadataApiCheck;
    this._skipRegionValidation = config.skipRegionValidation;
    this._skipRequestingAccountId = config.skipRequestingAccountId;
    this._stsRegion = config.stsRegion;
    this._tagPolicyCompliance = config.tagPolicyCompliance;
    this._token = config.token;
    this._tokenBucketRateLimiterCapacity = config.tokenBucketRateLimiterCapacity;
    this._useDualstackEndpoint = config.useDualstackEndpoint;
    this._useFipsEndpoint = config.useFipsEndpoint;
    this._userAgent = config.userAgent;
    this._alias = config.alias;
    this._assumeRole = config.assumeRole;
    this._assumeRoleWithWebIdentity = config.assumeRoleWithWebIdentity;
    this._defaultTags = config.defaultTags;
    this._endpoints = config.endpoints;
    this._ignoreTags = config.ignoreTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // allowed_account_ids - computed: false, optional: true, required: false
  private _allowedAccountIds?: string[]; 
  public get allowedAccountIds() {
    return this._allowedAccountIds;
  }
  public set allowedAccountIds(value: string[] | undefined) {
    this._allowedAccountIds = value;
  }
  public resetAllowedAccountIds() {
    this._allowedAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccountIdsInput() {
    return this._allowedAccountIds;
  }

  // custom_ca_bundle - computed: false, optional: true, required: false
  private _customCaBundle?: string; 
  public get customCaBundle() {
    return this._customCaBundle;
  }
  public set customCaBundle(value: string | undefined) {
    this._customCaBundle = value;
  }
  public resetCustomCaBundle() {
    this._customCaBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCaBundleInput() {
    return this._customCaBundle;
  }

  // ec2_metadata_service_endpoint - computed: false, optional: true, required: false
  private _ec2MetadataServiceEndpoint?: string; 
  public get ec2MetadataServiceEndpoint() {
    return this._ec2MetadataServiceEndpoint;
  }
  public set ec2MetadataServiceEndpoint(value: string | undefined) {
    this._ec2MetadataServiceEndpoint = value;
  }
  public resetEc2MetadataServiceEndpoint() {
    this._ec2MetadataServiceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2MetadataServiceEndpointInput() {
    return this._ec2MetadataServiceEndpoint;
  }

  // ec2_metadata_service_endpoint_mode - computed: false, optional: true, required: false
  private _ec2MetadataServiceEndpointMode?: string; 
  public get ec2MetadataServiceEndpointMode() {
    return this._ec2MetadataServiceEndpointMode;
  }
  public set ec2MetadataServiceEndpointMode(value: string | undefined) {
    this._ec2MetadataServiceEndpointMode = value;
  }
  public resetEc2MetadataServiceEndpointMode() {
    this._ec2MetadataServiceEndpointMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2MetadataServiceEndpointModeInput() {
    return this._ec2MetadataServiceEndpointMode;
  }

  // forbidden_account_ids - computed: false, optional: true, required: false
  private _forbiddenAccountIds?: string[]; 
  public get forbiddenAccountIds() {
    return this._forbiddenAccountIds;
  }
  public set forbiddenAccountIds(value: string[] | undefined) {
    this._forbiddenAccountIds = value;
  }
  public resetForbiddenAccountIds() {
    this._forbiddenAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenAccountIdsInput() {
    return this._forbiddenAccountIds;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this._httpProxy;
  }
  public set httpProxy(value: string | undefined) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this._httpsProxy;
  }
  public set httpsProxy(value: string | undefined) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktn.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktn.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this._noProxy;
  }
  public set noProxy(value: string | undefined) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // retry_mode - computed: false, optional: true, required: false
  private _retryMode?: string; 
  public get retryMode() {
    return this._retryMode;
  }
  public set retryMode(value: string | undefined) {
    this._retryMode = value;
  }
  public resetRetryMode() {
    this._retryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryModeInput() {
    return this._retryMode;
  }

  // s3_us_east_1_regional_endpoint - computed: false, optional: true, required: false
  private _s3UsEast1RegionalEndpoint?: string; 
  public get s3UsEast1RegionalEndpoint() {
    return this._s3UsEast1RegionalEndpoint;
  }
  public set s3UsEast1RegionalEndpoint(value: string | undefined) {
    this._s3UsEast1RegionalEndpoint = value;
  }
  public resetS3UsEast1RegionalEndpoint() {
    this._s3UsEast1RegionalEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UsEast1RegionalEndpointInput() {
    return this._s3UsEast1RegionalEndpoint;
  }

  // s3_use_path_style - computed: false, optional: true, required: false
  private _s3UsePathStyle?: boolean | cdktn.IResolvable; 
  public get s3UsePathStyle() {
    return this._s3UsePathStyle;
  }
  public set s3UsePathStyle(value: boolean | cdktn.IResolvable | undefined) {
    this._s3UsePathStyle = value;
  }
  public resetS3UsePathStyle() {
    this._s3UsePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UsePathStyleInput() {
    return this._s3UsePathStyle;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string | undefined) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // shared_config_files - computed: false, optional: true, required: false
  private _sharedConfigFiles?: string[]; 
  public get sharedConfigFiles() {
    return this._sharedConfigFiles;
  }
  public set sharedConfigFiles(value: string[] | undefined) {
    this._sharedConfigFiles = value;
  }
  public resetSharedConfigFiles() {
    this._sharedConfigFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedConfigFilesInput() {
    return this._sharedConfigFiles;
  }

  // shared_credentials_files - computed: false, optional: true, required: false
  private _sharedCredentialsFiles?: string[]; 
  public get sharedCredentialsFiles() {
    return this._sharedCredentialsFiles;
  }
  public set sharedCredentialsFiles(value: string[] | undefined) {
    this._sharedCredentialsFiles = value;
  }
  public resetSharedCredentialsFiles() {
    this._sharedCredentialsFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCredentialsFilesInput() {
    return this._sharedCredentialsFiles;
  }

  // skip_credentials_validation - computed: false, optional: true, required: false
  private _skipCredentialsValidation?: boolean | cdktn.IResolvable; 
  public get skipCredentialsValidation() {
    return this._skipCredentialsValidation;
  }
  public set skipCredentialsValidation(value: boolean | cdktn.IResolvable | undefined) {
    this._skipCredentialsValidation = value;
  }
  public resetSkipCredentialsValidation() {
    this._skipCredentialsValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCredentialsValidationInput() {
    return this._skipCredentialsValidation;
  }

  // skip_metadata_api_check - computed: false, optional: true, required: false
  private _skipMetadataApiCheck?: string; 
  public get skipMetadataApiCheck() {
    return this._skipMetadataApiCheck;
  }
  public set skipMetadataApiCheck(value: string | undefined) {
    this._skipMetadataApiCheck = value;
  }
  public resetSkipMetadataApiCheck() {
    this._skipMetadataApiCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMetadataApiCheckInput() {
    return this._skipMetadataApiCheck;
  }

  // skip_region_validation - computed: false, optional: true, required: false
  private _skipRegionValidation?: boolean | cdktn.IResolvable; 
  public get skipRegionValidation() {
    return this._skipRegionValidation;
  }
  public set skipRegionValidation(value: boolean | cdktn.IResolvable | undefined) {
    this._skipRegionValidation = value;
  }
  public resetSkipRegionValidation() {
    this._skipRegionValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRegionValidationInput() {
    return this._skipRegionValidation;
  }

  // skip_requesting_account_id - computed: false, optional: true, required: false
  private _skipRequestingAccountId?: boolean | cdktn.IResolvable; 
  public get skipRequestingAccountId() {
    return this._skipRequestingAccountId;
  }
  public set skipRequestingAccountId(value: boolean | cdktn.IResolvable | undefined) {
    this._skipRequestingAccountId = value;
  }
  public resetSkipRequestingAccountId() {
    this._skipRequestingAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRequestingAccountIdInput() {
    return this._skipRequestingAccountId;
  }

  // sts_region - computed: false, optional: true, required: false
  private _stsRegion?: string; 
  public get stsRegion() {
    return this._stsRegion;
  }
  public set stsRegion(value: string | undefined) {
    this._stsRegion = value;
  }
  public resetStsRegion() {
    this._stsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsRegionInput() {
    return this._stsRegion;
  }

  // tag_policy_compliance - computed: false, optional: true, required: false
  private _tagPolicyCompliance?: string; 
  public get tagPolicyCompliance() {
    return this._tagPolicyCompliance;
  }
  public set tagPolicyCompliance(value: string | undefined) {
    this._tagPolicyCompliance = value;
  }
  public resetTagPolicyCompliance() {
    this._tagPolicyCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPolicyComplianceInput() {
    return this._tagPolicyCompliance;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_bucket_rate_limiter_capacity - computed: false, optional: true, required: false
  private _tokenBucketRateLimiterCapacity?: number; 
  public get tokenBucketRateLimiterCapacity() {
    return this._tokenBucketRateLimiterCapacity;
  }
  public set tokenBucketRateLimiterCapacity(value: number | undefined) {
    this._tokenBucketRateLimiterCapacity = value;
  }
  public resetTokenBucketRateLimiterCapacity() {
    this._tokenBucketRateLimiterCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBucketRateLimiterCapacityInput() {
    return this._tokenBucketRateLimiterCapacity;
  }

  // use_dualstack_endpoint - computed: false, optional: true, required: false
  private _useDualstackEndpoint?: boolean | cdktn.IResolvable; 
  public get useDualstackEndpoint() {
    return this._useDualstackEndpoint;
  }
  public set useDualstackEndpoint(value: boolean | cdktn.IResolvable | undefined) {
    this._useDualstackEndpoint = value;
  }
  public resetUseDualstackEndpoint() {
    this._useDualstackEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDualstackEndpointInput() {
    return this._useDualstackEndpoint;
  }

  // use_fips_endpoint - computed: false, optional: true, required: false
  private _useFipsEndpoint?: boolean | cdktn.IResolvable; 
  public get useFipsEndpoint() {
    return this._useFipsEndpoint;
  }
  public set useFipsEndpoint(value: boolean | cdktn.IResolvable | undefined) {
    this._useFipsEndpoint = value;
  }
  public resetUseFipsEndpoint() {
    this._useFipsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFipsEndpointInput() {
    return this._useFipsEndpoint;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string[]; 
  public get userAgent() {
    return this._userAgent;
  }
  public set userAgent(value: string[] | undefined) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: AwsProviderAssumeRole[] | cdktn.IResolvable; 
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: AwsProviderAssumeRole[] | cdktn.IResolvable | undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // assume_role_with_web_identity - computed: false, optional: true, required: false
  private _assumeRoleWithWebIdentity?: AwsProviderAssumeRoleWithWebIdentity[] | cdktn.IResolvable; 
  public get assumeRoleWithWebIdentity() {
    return this._assumeRoleWithWebIdentity;
  }
  public set assumeRoleWithWebIdentity(value: AwsProviderAssumeRoleWithWebIdentity[] | cdktn.IResolvable | undefined) {
    this._assumeRoleWithWebIdentity = value;
  }
  public resetAssumeRoleWithWebIdentity() {
    this._assumeRoleWithWebIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleWithWebIdentityInput() {
    return this._assumeRoleWithWebIdentity;
  }

  // default_tags - computed: false, optional: true, required: false
  private _defaultTags?: AwsProviderDefaultTags[] | cdktn.IResolvable; 
  public get defaultTags() {
    return this._defaultTags;
  }
  public set defaultTags(value: AwsProviderDefaultTags[] | cdktn.IResolvable | undefined) {
    this._defaultTags = value;
  }
  public resetDefaultTags() {
    this._defaultTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTagsInput() {
    return this._defaultTags;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: AwsProviderEndpoints[] | cdktn.IResolvable; 
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: AwsProviderEndpoints[] | cdktn.IResolvable | undefined) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // ignore_tags - computed: false, optional: true, required: false
  private _ignoreTags?: AwsProviderIgnoreTags[] | cdktn.IResolvable; 
  public get ignoreTags() {
    return this._ignoreTags;
  }
  public set ignoreTags(value: AwsProviderIgnoreTags[] | cdktn.IResolvable | undefined) {
    this._ignoreTags = value;
  }
  public resetIgnoreTags() {
    this._ignoreTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagsInput() {
    return this._ignoreTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktn.stringToTerraform(this._accessKey),
      allowed_account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedAccountIds),
      custom_ca_bundle: cdktn.stringToTerraform(this._customCaBundle),
      ec2_metadata_service_endpoint: cdktn.stringToTerraform(this._ec2MetadataServiceEndpoint),
      ec2_metadata_service_endpoint_mode: cdktn.stringToTerraform(this._ec2MetadataServiceEndpointMode),
      forbidden_account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._forbiddenAccountIds),
      http_proxy: cdktn.stringToTerraform(this._httpProxy),
      https_proxy: cdktn.stringToTerraform(this._httpsProxy),
      insecure: cdktn.booleanToTerraform(this._insecure),
      max_retries: cdktn.numberToTerraform(this._maxRetries),
      no_proxy: cdktn.stringToTerraform(this._noProxy),
      profile: cdktn.stringToTerraform(this._profile),
      region: cdktn.stringToTerraform(this._region),
      retry_mode: cdktn.stringToTerraform(this._retryMode),
      s3_us_east_1_regional_endpoint: cdktn.stringToTerraform(this._s3UsEast1RegionalEndpoint),
      s3_use_path_style: cdktn.booleanToTerraform(this._s3UsePathStyle),
      secret_key: cdktn.stringToTerraform(this._secretKey),
      shared_config_files: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sharedConfigFiles),
      shared_credentials_files: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sharedCredentialsFiles),
      skip_credentials_validation: cdktn.booleanToTerraform(this._skipCredentialsValidation),
      skip_metadata_api_check: cdktn.stringToTerraform(this._skipMetadataApiCheck),
      skip_region_validation: cdktn.booleanToTerraform(this._skipRegionValidation),
      skip_requesting_account_id: cdktn.booleanToTerraform(this._skipRequestingAccountId),
      sts_region: cdktn.stringToTerraform(this._stsRegion),
      tag_policy_compliance: cdktn.stringToTerraform(this._tagPolicyCompliance),
      token: cdktn.stringToTerraform(this._token),
      token_bucket_rate_limiter_capacity: cdktn.numberToTerraform(this._tokenBucketRateLimiterCapacity),
      use_dualstack_endpoint: cdktn.booleanToTerraform(this._useDualstackEndpoint),
      use_fips_endpoint: cdktn.booleanToTerraform(this._useFipsEndpoint),
      user_agent: cdktn.listMapper(cdktn.stringToTerraform, false)(this._userAgent),
      alias: cdktn.stringToTerraform(this._alias),
      assume_role: cdktn.listMapper(awsProviderAssumeRoleToTerraform, true)(this._assumeRole),
      assume_role_with_web_identity: cdktn.listMapper(awsProviderAssumeRoleWithWebIdentityToTerraform, true)(this._assumeRoleWithWebIdentity),
      default_tags: cdktn.listMapper(awsProviderDefaultTagsToTerraform, true)(this._defaultTags),
      endpoints: cdktn.listMapper(awsProviderEndpointsToTerraform, true)(this._endpoints),
      ignore_tags: cdktn.listMapper(awsProviderIgnoreTagsToTerraform, true)(this._ignoreTags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktn.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_account_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_ca_bundle: {
        value: cdktn.stringToHclTerraform(this._customCaBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ec2_metadata_service_endpoint: {
        value: cdktn.stringToHclTerraform(this._ec2MetadataServiceEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ec2_metadata_service_endpoint_mode: {
        value: cdktn.stringToHclTerraform(this._ec2MetadataServiceEndpointMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forbidden_account_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._forbiddenAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_proxy: {
        value: cdktn.stringToHclTerraform(this._httpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_proxy: {
        value: cdktn.stringToHclTerraform(this._httpsProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktn.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_retries: {
        value: cdktn.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_proxy: {
        value: cdktn.stringToHclTerraform(this._noProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktn.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_mode: {
        value: cdktn.stringToHclTerraform(this._retryMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_us_east_1_regional_endpoint: {
        value: cdktn.stringToHclTerraform(this._s3UsEast1RegionalEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_use_path_style: {
        value: cdktn.booleanToHclTerraform(this._s3UsePathStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_key: {
        value: cdktn.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_config_files: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._sharedConfigFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shared_credentials_files: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._sharedCredentialsFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_credentials_validation: {
        value: cdktn.booleanToHclTerraform(this._skipCredentialsValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_metadata_api_check: {
        value: cdktn.stringToHclTerraform(this._skipMetadataApiCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_region_validation: {
        value: cdktn.booleanToHclTerraform(this._skipRegionValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_requesting_account_id: {
        value: cdktn.booleanToHclTerraform(this._skipRequestingAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sts_region: {
        value: cdktn.stringToHclTerraform(this._stsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_policy_compliance: {
        value: cdktn.stringToHclTerraform(this._tagPolicyCompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktn.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_bucket_rate_limiter_capacity: {
        value: cdktn.numberToHclTerraform(this._tokenBucketRateLimiterCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_dualstack_endpoint: {
        value: cdktn.booleanToHclTerraform(this._useDualstackEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_fips_endpoint: {
        value: cdktn.booleanToHclTerraform(this._useFipsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_agent: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._userAgent),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      alias: {
        value: cdktn.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assume_role: {
        value: cdktn.listMapperHcl(awsProviderAssumeRoleToHclTerraform, true)(this._assumeRole),
        isBlock: true,
        type: "list",
        storageClassType: "AwsProviderAssumeRoleList",
      },
      assume_role_with_web_identity: {
        value: cdktn.listMapperHcl(awsProviderAssumeRoleWithWebIdentityToHclTerraform, true)(this._assumeRoleWithWebIdentity),
        isBlock: true,
        type: "list",
        storageClassType: "AwsProviderAssumeRoleWithWebIdentityList",
      },
      default_tags: {
        value: cdktn.listMapperHcl(awsProviderDefaultTagsToHclTerraform, true)(this._defaultTags),
        isBlock: true,
        type: "list",
        storageClassType: "AwsProviderDefaultTagsList",
      },
      endpoints: {
        value: cdktn.listMapperHcl(awsProviderEndpointsToHclTerraform, true)(this._endpoints),
        isBlock: true,
        type: "set",
        storageClassType: "AwsProviderEndpointsList",
      },
      ignore_tags: {
        value: cdktn.listMapperHcl(awsProviderIgnoreTagsToHclTerraform, true)(this._ignoreTags),
        isBlock: true,
        type: "list",
        storageClassType: "AwsProviderIgnoreTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

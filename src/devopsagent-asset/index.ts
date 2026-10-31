/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DevopsagentAssetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Identifier of the Agent Space containing the asset. Changing this value requires replacement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#agent_space_id DevopsagentAsset#agent_space_id}
  */
  readonly agentSpaceId: string;
  /**
  * Type of asset. Changing this value requires replacement. See https://docs.aws.amazon.com/devopsagent/latest/userguide/about-aws-devops-agent-managing-assets.html for supported types and their metadata requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#asset_type DevopsagentAsset#asset_type}
  */
  readonly assetType: string;
  /**
  * JSON document describing the asset. Required metadata fields depend on asset_type. Updates replace supplied top-level fields and retain omitted fields in AWS; removing a field from this document does not delete it from AWS. Changes to metadata alone do not re-upload content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#metadata DevopsagentAsset#metadata}
  */
  readonly metadata?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#region DevopsagentAsset#region}
  */
  readonly region?: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#content DevopsagentAsset#content}
  */
  readonly content?: DevopsagentAssetContent[] | cdktn.IResolvable;
}
export interface DevopsagentAssetContentFileBody {
  /**
  * Base64-encoded binary file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#bytes DevopsagentAsset#bytes}
  */
  readonly bytes?: string;
  /**
  * Text file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#text DevopsagentAsset#text}
  */
  readonly text?: string;
}

export function devopsagentAssetContentFileBodyToTerraform(struct?: DevopsagentAssetContentFileBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bytes: cdktn.stringToTerraform(struct!.bytes),
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function devopsagentAssetContentFileBodyToHclTerraform(struct?: DevopsagentAssetContentFileBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bytes: {
      value: cdktn.stringToHclTerraform(struct!.bytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssetContentFileBodyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DevopsagentAssetContentFileBody | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes = this._bytes;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssetContentFileBody | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bytes = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bytes = value.bytes;
      this._text = value.text;
    }
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes?: string; 
  public get bytes() {
    return this.getStringAttribute('bytes');
  }
  public set bytes(value: string) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class DevopsagentAssetContentFileBodyList extends cdktn.ComplexList {
  public internalValue? : DevopsagentAssetContentFileBody[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DevopsagentAssetContentFileBodyOutputReference {
    return new DevopsagentAssetContentFileBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsagentAssetContentFile {
  /**
  * JSON metadata for the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#metadata DevopsagentAsset#metadata}
  */
  readonly metadata?: string;
  /**
  * Path of the file within the asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#path DevopsagentAsset#path}
  */
  readonly path: string;
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#body DevopsagentAsset#body}
  */
  readonly body?: DevopsagentAssetContentFileBody[] | cdktn.IResolvable;
}

export function devopsagentAssetContentFileToTerraform(struct?: DevopsagentAssetContentFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata: cdktn.stringToTerraform(struct!.metadata),
    path: cdktn.stringToTerraform(struct!.path),
    body: cdktn.listMapper(devopsagentAssetContentFileBodyToTerraform, true)(struct!.body),
  }
}


export function devopsagentAssetContentFileToHclTerraform(struct?: DevopsagentAssetContentFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata: {
      value: cdktn.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body: {
      value: cdktn.listMapperHcl(devopsagentAssetContentFileBodyToHclTerraform, true)(struct!.body),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsagentAssetContentFileBodyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssetContentFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DevopsagentAssetContentFile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssetContentFile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._path = undefined;
      this._body.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._path = value.path;
      this._body.internalValue = value.body;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // body - computed: false, optional: true, required: false
  private _body = new DevopsagentAssetContentFileBodyList(this, "body", false);
  public get body() {
    return this._body;
  }
  public putBody(value: DevopsagentAssetContentFileBody[] | cdktn.IResolvable) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }
}

export class DevopsagentAssetContentFileList extends cdktn.ComplexList {
  public internalValue? : DevopsagentAssetContentFile[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DevopsagentAssetContentFileOutputReference {
    return new DevopsagentAssetContentFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsagentAssetContentSourceUrl {
  /**
  * Source URL from which to import asset content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#url DevopsagentAsset#url}
  */
  readonly url: string;
}

export function devopsagentAssetContentSourceUrlToTerraform(struct?: DevopsagentAssetContentSourceUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function devopsagentAssetContentSourceUrlToHclTerraform(struct?: DevopsagentAssetContentSourceUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssetContentSourceUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DevopsagentAssetContentSourceUrl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssetContentSourceUrl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DevopsagentAssetContentSourceUrlList extends cdktn.ComplexList {
  public internalValue? : DevopsagentAssetContentSourceUrl[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DevopsagentAssetContentSourceUrlOutputReference {
    return new DevopsagentAssetContentSourceUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsagentAssetContentZip {
  /**
  * Base64-encoded ZIP archive. Use filebase64() to load a local ZIP file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#zip_file DevopsagentAsset#zip_file}
  */
  readonly zipFile: string;
}

export function devopsagentAssetContentZipToTerraform(struct?: DevopsagentAssetContentZip | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    zip_file: cdktn.stringToTerraform(struct!.zipFile),
  }
}


export function devopsagentAssetContentZipToHclTerraform(struct?: DevopsagentAssetContentZip | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    zip_file: {
      value: cdktn.stringToHclTerraform(struct!.zipFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssetContentZipOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DevopsagentAssetContentZip | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zipFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipFile = this._zipFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssetContentZip | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._zipFile = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._zipFile = value.zipFile;
    }
  }

  // zip_file - computed: false, optional: false, required: true
  private _zipFile?: string; 
  public get zipFile() {
    return this.getStringAttribute('zip_file');
  }
  public set zipFile(value: string) {
    this._zipFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zipFileInput() {
    return this._zipFile;
  }
}

export class DevopsagentAssetContentZipList extends cdktn.ComplexList {
  public internalValue? : DevopsagentAssetContentZip[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DevopsagentAssetContentZipOutputReference {
    return new DevopsagentAssetContentZipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsagentAssetContent {
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#file DevopsagentAsset#file}
  */
  readonly file?: DevopsagentAssetContentFile[] | cdktn.IResolvable;
  /**
  * source_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#source_url DevopsagentAsset#source_url}
  */
  readonly sourceUrl?: DevopsagentAssetContentSourceUrl[] | cdktn.IResolvable;
  /**
  * zip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#zip DevopsagentAsset#zip}
  */
  readonly zip?: DevopsagentAssetContentZip[] | cdktn.IResolvable;
}

export function devopsagentAssetContentToTerraform(struct?: DevopsagentAssetContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file: cdktn.listMapper(devopsagentAssetContentFileToTerraform, true)(struct!.file),
    source_url: cdktn.listMapper(devopsagentAssetContentSourceUrlToTerraform, true)(struct!.sourceUrl),
    zip: cdktn.listMapper(devopsagentAssetContentZipToTerraform, true)(struct!.zip),
  }
}


export function devopsagentAssetContentToHclTerraform(struct?: DevopsagentAssetContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file: {
      value: cdktn.listMapperHcl(devopsagentAssetContentFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsagentAssetContentFileList",
    },
    source_url: {
      value: cdktn.listMapperHcl(devopsagentAssetContentSourceUrlToHclTerraform, true)(struct!.sourceUrl),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsagentAssetContentSourceUrlList",
    },
    zip: {
      value: cdktn.listMapperHcl(devopsagentAssetContentZipToHclTerraform, true)(struct!.zip),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsagentAssetContentZipList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssetContentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DevopsagentAssetContent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sourceUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl?.internalValue;
    }
    if (this._zip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zip = this._zip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssetContent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file.internalValue = undefined;
      this._sourceUrl.internalValue = undefined;
      this._zip.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file.internalValue = value.file;
      this._sourceUrl.internalValue = value.sourceUrl;
      this._zip.internalValue = value.zip;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new DevopsagentAssetContentFileList(this, "file", false);
  public get file() {
    return this._file;
  }
  public putFile(value: DevopsagentAssetContentFile[] | cdktn.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // source_url - computed: false, optional: true, required: false
  private _sourceUrl = new DevopsagentAssetContentSourceUrlList(this, "source_url", false);
  public get sourceUrl() {
    return this._sourceUrl;
  }
  public putSourceUrl(value: DevopsagentAssetContentSourceUrl[] | cdktn.IResolvable) {
    this._sourceUrl.internalValue = value;
  }
  public resetSourceUrl() {
    this._sourceUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl.internalValue;
  }

  // zip - computed: false, optional: true, required: false
  private _zip = new DevopsagentAssetContentZipList(this, "zip", false);
  public get zip() {
    return this._zip;
  }
  public putZip(value: DevopsagentAssetContentZip[] | cdktn.IResolvable) {
    this._zip.internalValue = value;
  }
  public resetZip() {
    this._zip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipInput() {
    return this._zip.internalValue;
  }
}

export class DevopsagentAssetContentList extends cdktn.ComplexList {
  public internalValue? : DevopsagentAssetContent[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DevopsagentAssetContentOutputReference {
    return new DevopsagentAssetContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset aws_devopsagent_asset}
*/
export class DevopsagentAsset extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_devopsagent_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DevopsagentAsset resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsagentAsset to import
  * @param importFromId The id of the existing DevopsagentAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsagentAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_devopsagent_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset aws_devopsagent_asset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsagentAssetConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsagentAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_devopsagent_asset',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.71.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentSpaceId = config.agentSpaceId;
    this._assetType = config.assetType;
    this._metadata = config.metadata;
    this._region = config.region;
    this._content.internalValue = config.content;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_space_id - computed: false, optional: false, required: true
  private _agentSpaceId?: string; 
  public get agentSpaceId() {
    return this.getStringAttribute('agent_space_id');
  }
  public set agentSpaceId(value: string) {
    this._agentSpaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentSpaceIdInput() {
    return this._agentSpaceId;
  }

  // asset_id - computed: true, optional: false, required: false
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }

  // asset_type - computed: false, optional: false, required: true
  private _assetType?: string; 
  public get assetType() {
    return this.getStringAttribute('asset_type');
  }
  public set assetType(value: string) {
    this._assetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTypeInput() {
    return this._assetType;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metadata_actual - computed: true, optional: false, required: false
  public get metadataActual() {
    return this.getStringAttribute('metadata_actual');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // content - computed: false, optional: true, required: false
  private _content = new DevopsagentAssetContentList(this, "content", false);
  public get content() {
    return this._content;
  }
  public putContent(value: DevopsagentAssetContent[] | cdktn.IResolvable) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_space_id: cdktn.stringToTerraform(this._agentSpaceId),
      asset_type: cdktn.stringToTerraform(this._assetType),
      metadata: cdktn.stringToTerraform(this._metadata),
      region: cdktn.stringToTerraform(this._region),
      content: cdktn.listMapper(devopsagentAssetContentToTerraform, true)(this._content.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_space_id: {
        value: cdktn.stringToHclTerraform(this._agentSpaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_type: {
        value: cdktn.stringToHclTerraform(this._assetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktn.stringToHclTerraform(this._metadata),
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
      content: {
        value: cdktn.listMapperHcl(devopsagentAssetContentToHclTerraform, true)(this._content.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsagentAssetContentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

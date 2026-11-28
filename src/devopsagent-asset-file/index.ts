/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DevopsagentAssetFileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Identifier of the Agent Space containing the asset. Changing this value requires replacement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#agent_space_id DevopsagentAssetFile#agent_space_id}
  */
  readonly agentSpaceId: string;
  /**
  * Identifier of the asset containing the file. Changing this value requires replacement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#asset_id DevopsagentAssetFile#asset_id}
  */
  readonly assetId: string;
  /**
  * JSON document describing the file. Updates replace supplied top-level fields and retain omitted fields in AWS; removing a field from this document does not delete it from AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#metadata DevopsagentAssetFile#metadata}
  */
  readonly metadata?: string;
  /**
  * Path of the file within the asset. Changing this value requires replacement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#path DevopsagentAssetFile#path}
  */
  readonly path: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#region DevopsagentAssetFile#region}
  */
  readonly region?: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#content DevopsagentAssetFile#content}
  */
  readonly content?: DevopsagentAssetFileContent[] | cdktn.IResolvable;
}
export interface DevopsagentAssetFileContent {
  /**
  * Base64-encoded binary file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#bytes DevopsagentAssetFile#bytes}
  */
  readonly bytes?: string;
  /**
  * Text file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#text DevopsagentAssetFile#text}
  */
  readonly text?: string;
}

export function devopsagentAssetFileContentToTerraform(struct?: DevopsagentAssetFileContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bytes: cdktn.stringToTerraform(struct!.bytes),
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function devopsagentAssetFileContentToHclTerraform(struct?: DevopsagentAssetFileContent | cdktn.IResolvable): any {
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

export class DevopsagentAssetFileContentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DevopsagentAssetFileContent | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DevopsagentAssetFileContent | cdktn.IResolvable | undefined) {
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

export class DevopsagentAssetFileContentList extends cdktn.ComplexList {
  public internalValue? : DevopsagentAssetFileContent[] | cdktn.IResolvable

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
  public get(index: number): DevopsagentAssetFileContentOutputReference {
    return new DevopsagentAssetFileContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file aws_devopsagent_asset_file}
*/
export class DevopsagentAssetFile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_devopsagent_asset_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DevopsagentAssetFile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsagentAssetFile to import
  * @param importFromId The id of the existing DevopsagentAssetFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsagentAssetFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_devopsagent_asset_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file aws_devopsagent_asset_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsagentAssetFileConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsagentAssetFileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_devopsagent_asset_file',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.74.0',
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
    this._assetId = config.assetId;
    this._metadata = config.metadata;
    this._path = config.path;
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

  // asset_id - computed: false, optional: false, required: true
  private _assetId?: string; 
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }
  public set assetId(value: string) {
    this._assetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId;
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
  private _content = new DevopsagentAssetFileContentList(this, "content", false);
  public get content() {
    return this._content;
  }
  public putContent(value: DevopsagentAssetFileContent[] | cdktn.IResolvable) {
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
      asset_id: cdktn.stringToTerraform(this._assetId),
      metadata: cdktn.stringToTerraform(this._metadata),
      path: cdktn.stringToTerraform(this._path),
      region: cdktn.stringToTerraform(this._region),
      content: cdktn.listMapper(devopsagentAssetFileContentToTerraform, true)(this._content.internalValue),
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
      asset_id: {
        value: cdktn.stringToHclTerraform(this._assetId),
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
      path: {
        value: cdktn.stringToHclTerraform(this._path),
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
        value: cdktn.listMapperHcl(devopsagentAssetFileContentToHclTerraform, true)(this._content.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsagentAssetFileContentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

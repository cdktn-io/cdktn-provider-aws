/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsSagemakerHubContentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}
  */
  readonly hubContentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}
  */
  readonly hubContentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}
  */
  readonly hubContentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}
  */
  readonly hubName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#region DataAwsSagemakerHubContent#region}
  */
  readonly region?: string;
}
export interface DataAwsSagemakerHubContentHubContentDependency {
}

export function dataAwsSagemakerHubContentHubContentDependencyToTerraform(struct?: DataAwsSagemakerHubContentHubContentDependency): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsSagemakerHubContentHubContentDependencyToHclTerraform(struct?: DataAwsSagemakerHubContentHubContentDependency): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSagemakerHubContentHubContentDependencyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSagemakerHubContentHubContentDependency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSagemakerHubContentHubContentDependency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dependency_copy_path - computed: true, optional: false, required: false
  public get dependencyCopyPath() {
    return this.getStringAttribute('dependency_copy_path');
  }

  // dependency_origin_path - computed: true, optional: false, required: false
  public get dependencyOriginPath() {
    return this.getStringAttribute('dependency_origin_path');
  }
}

export class DataAwsSagemakerHubContentHubContentDependencyList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsSagemakerHubContentHubContentDependencyOutputReference {
    return new DataAwsSagemakerHubContentHubContentDependencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content aws_sagemaker_hub_content}
*/
export class DataAwsSagemakerHubContent extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_hub_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsSagemakerHubContent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSagemakerHubContent to import
  * @param importFromId The id of the existing DataAwsSagemakerHubContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSagemakerHubContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_hub_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content aws_sagemaker_hub_content} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSagemakerHubContentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSagemakerHubContentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_hub_content',
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
    this._hubContentName = config.hubContentName;
    this._hubContentType = config.hubContentType;
    this._hubContentVersion = config.hubContentVersion;
    this._hubName = config.hubName;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // document_schema_version - computed: true, optional: false, required: false
  public get documentSchemaVersion() {
    return this.getStringAttribute('document_schema_version');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // hub_arn - computed: true, optional: false, required: false
  public get hubArn() {
    return this.getStringAttribute('hub_arn');
  }

  // hub_content_arn - computed: true, optional: false, required: false
  public get hubContentArn() {
    return this.getStringAttribute('hub_content_arn');
  }

  // hub_content_dependency - computed: true, optional: false, required: false
  private _hubContentDependency = new DataAwsSagemakerHubContentHubContentDependencyList(this, "hub_content_dependency", false);
  public get hubContentDependency() {
    return this._hubContentDependency;
  }

  // hub_content_description - computed: true, optional: false, required: false
  public get hubContentDescription() {
    return this.getStringAttribute('hub_content_description');
  }

  // hub_content_display_name - computed: true, optional: false, required: false
  public get hubContentDisplayName() {
    return this.getStringAttribute('hub_content_display_name');
  }

  // hub_content_document - computed: true, optional: false, required: false
  public get hubContentDocument() {
    return this.getStringAttribute('hub_content_document');
  }

  // hub_content_markdown - computed: true, optional: false, required: false
  public get hubContentMarkdown() {
    return this.getStringAttribute('hub_content_markdown');
  }

  // hub_content_name - computed: false, optional: false, required: true
  private _hubContentName?: string; 
  public get hubContentName() {
    return this.getStringAttribute('hub_content_name');
  }
  public set hubContentName(value: string) {
    this._hubContentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubContentNameInput() {
    return this._hubContentName;
  }

  // hub_content_search_keywords - computed: true, optional: false, required: false
  public get hubContentSearchKeywords() {
    return this.getListAttribute('hub_content_search_keywords');
  }

  // hub_content_status - computed: true, optional: false, required: false
  public get hubContentStatus() {
    return this.getStringAttribute('hub_content_status');
  }

  // hub_content_type - computed: false, optional: false, required: true
  private _hubContentType?: string; 
  public get hubContentType() {
    return this.getStringAttribute('hub_content_type');
  }
  public set hubContentType(value: string) {
    this._hubContentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubContentTypeInput() {
    return this._hubContentType;
  }

  // hub_content_version - computed: true, optional: true, required: false
  private _hubContentVersion?: string; 
  public get hubContentVersion() {
    return this.getStringAttribute('hub_content_version');
  }
  public set hubContentVersion(value: string) {
    this._hubContentVersion = value;
  }
  public resetHubContentVersion() {
    this._hubContentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubContentVersionInput() {
    return this._hubContentVersion;
  }

  // hub_name - computed: false, optional: false, required: true
  private _hubName?: string; 
  public get hubName() {
    return this.getStringAttribute('hub_name');
  }
  public set hubName(value: string) {
    this._hubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubNameInput() {
    return this._hubName;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // reference_min_version - computed: true, optional: false, required: false
  public get referenceMinVersion() {
    return this.getStringAttribute('reference_min_version');
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

  // sagemaker_public_hub_content_arn - computed: true, optional: false, required: false
  public get sagemakerPublicHubContentArn() {
    return this.getStringAttribute('sagemaker_public_hub_content_arn');
  }

  // support_status - computed: true, optional: false, required: false
  public get supportStatus() {
    return this.getStringAttribute('support_status');
  }

  // versioned_hub_content_arn - computed: true, optional: false, required: false
  public get versionedHubContentArn() {
    return this.getStringAttribute('versioned_hub_content_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hub_content_name: cdktn.stringToTerraform(this._hubContentName),
      hub_content_type: cdktn.stringToTerraform(this._hubContentType),
      hub_content_version: cdktn.stringToTerraform(this._hubContentVersion),
      hub_name: cdktn.stringToTerraform(this._hubName),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hub_content_name: {
        value: cdktn.stringToHclTerraform(this._hubContentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hub_content_type: {
        value: cdktn.stringToHclTerraform(this._hubContentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hub_content_version: {
        value: cdktn.stringToHclTerraform(this._hubContentVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hub_name: {
        value: cdktn.stringToHclTerraform(this._hubName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

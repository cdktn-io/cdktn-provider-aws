/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/s3files_file_systems
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsS3FilesFileSystemsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/s3files_file_systems#region DataAwsS3FilesFileSystems#region}
  */
  readonly region?: string;
  /**
  * file_systems block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/s3files_file_systems#file_systems DataAwsS3FilesFileSystems#file_systems}
  */
  readonly fileSystems?: DataAwsS3FilesFileSystemsFileSystems[] | cdktn.IResolvable;
}
export interface DataAwsS3FilesFileSystemsFileSystems {
}

export function dataAwsS3FilesFileSystemsFileSystemsToTerraform(struct?: DataAwsS3FilesFileSystemsFileSystems | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsS3FilesFileSystemsFileSystemsToHclTerraform(struct?: DataAwsS3FilesFileSystemsFileSystems | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsS3FilesFileSystemsFileSystemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsS3FilesFileSystemsFileSystems | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsS3FilesFileSystemsFileSystems | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }
}

export class DataAwsS3FilesFileSystemsFileSystemsList extends cdktn.ComplexList {
  public internalValue? : DataAwsS3FilesFileSystemsFileSystems[] | cdktn.IResolvable

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
  public get(index: number): DataAwsS3FilesFileSystemsFileSystemsOutputReference {
    return new DataAwsS3FilesFileSystemsFileSystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/s3files_file_systems aws_s3files_file_systems}
*/
export class DataAwsS3FilesFileSystems extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3files_file_systems";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsS3FilesFileSystems resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsS3FilesFileSystems to import
  * @param importFromId The id of the existing DataAwsS3FilesFileSystems that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/s3files_file_systems#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsS3FilesFileSystems to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3files_file_systems", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/s3files_file_systems aws_s3files_file_systems} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsS3FilesFileSystemsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsS3FilesFileSystemsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_s3files_file_systems',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.46.0',
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
    this._region = config.region;
    this._fileSystems.internalValue = config.fileSystems;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // file_systems - computed: false, optional: true, required: false
  private _fileSystems = new DataAwsS3FilesFileSystemsFileSystemsList(this, "file_systems", false);
  public get fileSystems() {
    return this._fileSystems;
  }
  public putFileSystems(value: DataAwsS3FilesFileSystemsFileSystems[] | cdktn.IResolvable) {
    this._fileSystems.internalValue = value;
  }
  public resetFileSystems() {
    this._fileSystems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemsInput() {
    return this._fileSystems.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      file_systems: cdktn.listMapper(dataAwsS3FilesFileSystemsFileSystemsToTerraform, true)(this._fileSystems.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_systems: {
        value: cdktn.listMapperHcl(dataAwsS3FilesFileSystemsFileSystemsToHclTerraform, true)(this._fileSystems.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsS3FilesFileSystemsFileSystemsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BcmdataexportsExportConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#tags BcmdataexportsExport#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#export BcmdataexportsExport#export}
  */
  readonly export?: BcmdataexportsExportExport[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#timeouts BcmdataexportsExport#timeouts}
  */
  readonly timeouts?: BcmdataexportsExportTimeouts;
}
export interface BcmdataexportsExportExportDataQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#query_statement BcmdataexportsExport#query_statement}
  */
  readonly queryStatement: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#table_configurations BcmdataexportsExport#table_configurations}
  */
  readonly tableConfigurations?: { [key: string]: { [key: string]: string } } | cdktn.IResolvable;
}

export function bcmdataexportsExportExportDataQueryToTerraform(struct?: BcmdataexportsExportExportDataQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_statement: cdktn.stringToTerraform(struct!.queryStatement),
    table_configurations: cdktn.hashMapper(cdktn.hashMapper(cdktn.stringToTerraform))(struct!.tableConfigurations),
  }
}


export function bcmdataexportsExportExportDataQueryToHclTerraform(struct?: BcmdataexportsExportExportDataQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_statement: {
      value: cdktn.stringToHclTerraform(struct!.queryStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_configurations: {
      value: cdktn.hashMapperHcl(cdktn.hashMapperHcl(cdktn.stringToHclTerraform))(struct!.tableConfigurations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BcmdataexportsExportExportDataQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BcmdataexportsExportExportDataQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStatement = this._queryStatement;
    }
    if (this._tableConfigurations !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConfigurations = this._tableConfigurations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BcmdataexportsExportExportDataQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryStatement = undefined;
      this._tableConfigurations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryStatement = value.queryStatement;
      this._tableConfigurations = value.tableConfigurations;
    }
  }

  // query_statement - computed: false, optional: false, required: true
  private _queryStatement?: string; 
  public get queryStatement() {
    return this.getStringAttribute('query_statement');
  }
  public set queryStatement(value: string) {
    this._queryStatement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStatementInput() {
    return this._queryStatement;
  }

  // table_configurations - computed: true, optional: true, required: false
  private _tableConfigurations?: { [key: string]: { [key: string]: string } } | cdktn.IResolvable; 
  public get tableConfigurations() {
    return this.interpolationForAttribute('table_configurations');
  }
  public set tableConfigurations(value: { [key: string]: { [key: string]: string } } | cdktn.IResolvable) {
    this._tableConfigurations = value;
  }
  public resetTableConfigurations() {
    this._tableConfigurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConfigurationsInput() {
    return this._tableConfigurations;
  }
}

export class BcmdataexportsExportExportDataQueryList extends cdktn.ComplexList {
  public internalValue? : BcmdataexportsExportExportDataQuery[] | cdktn.IResolvable

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
  public get(index: number): BcmdataexportsExportExportDataQueryOutputReference {
    return new BcmdataexportsExportExportDataQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#compression BcmdataexportsExport#compression}
  */
  readonly compression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#format BcmdataexportsExport#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#output_type BcmdataexportsExport#output_type}
  */
  readonly outputType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#overwrite BcmdataexportsExport#overwrite}
  */
  readonly overwrite: string;
}

export function bcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsToTerraform(struct?: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression: cdktn.stringToTerraform(struct!.compression),
    format: cdktn.stringToTerraform(struct!.format),
    output_type: cdktn.stringToTerraform(struct!.outputType),
    overwrite: cdktn.stringToTerraform(struct!.overwrite),
  }
}


export function bcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsToHclTerraform(struct?: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_type: {
      value: cdktn.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktn.stringToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compression = undefined;
      this._format = undefined;
      this._outputType = undefined;
      this._overwrite = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compression = value.compression;
      this._format = value.format;
      this._outputType = value.outputType;
      this._overwrite = value.overwrite;
    }
  }

  // compression - computed: false, optional: false, required: true
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // output_type - computed: false, optional: false, required: true
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // overwrite - computed: false, optional: false, required: true
  private _overwrite?: string; 
  public get overwrite() {
    return this.getStringAttribute('overwrite');
  }
  public set overwrite(value: string) {
    this._overwrite = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }
}

export class BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList extends cdktn.ComplexList {
  public internalValue? : BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations[] | cdktn.IResolvable

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
  public get(index: number): BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference {
    return new BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BcmdataexportsExportExportDestinationConfigurationsS3Destination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#s3_bucket BcmdataexportsExport#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#s3_prefix BcmdataexportsExport#s3_prefix}
  */
  readonly s3Prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#s3_region BcmdataexportsExport#s3_region}
  */
  readonly s3Region: string;
  /**
  * s3_output_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#s3_output_configurations BcmdataexportsExport#s3_output_configurations}
  */
  readonly s3OutputConfigurations?: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations[] | cdktn.IResolvable;
}

export function bcmdataexportsExportExportDestinationConfigurationsS3DestinationToTerraform(struct?: BcmdataexportsExportExportDestinationConfigurationsS3Destination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
    s3_prefix: cdktn.stringToTerraform(struct!.s3Prefix),
    s3_region: cdktn.stringToTerraform(struct!.s3Region),
    s3_output_configurations: cdktn.listMapper(bcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsToTerraform, true)(struct!.s3OutputConfigurations),
  }
}


export function bcmdataexportsExportExportDestinationConfigurationsS3DestinationToHclTerraform(struct?: BcmdataexportsExportExportDestinationConfigurationsS3Destination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket: {
      value: cdktn.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_prefix: {
      value: cdktn.stringToHclTerraform(struct!.s3Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktn.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_configurations: {
      value: cdktn.listMapperHcl(bcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsToHclTerraform, true)(struct!.s3OutputConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BcmdataexportsExportExportDestinationConfigurationsS3Destination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Prefix = this._s3Prefix;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3OutputConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputConfigurations = this._s3OutputConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BcmdataexportsExportExportDestinationConfigurationsS3Destination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Bucket = undefined;
      this._s3Prefix = undefined;
      this._s3Region = undefined;
      this._s3OutputConfigurations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Bucket = value.s3Bucket;
      this._s3Prefix = value.s3Prefix;
      this._s3Region = value.s3Region;
      this._s3OutputConfigurations.internalValue = value.s3OutputConfigurations;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_prefix - computed: false, optional: false, required: true
  private _s3Prefix?: string; 
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
  public set s3Prefix(value: string) {
    this._s3Prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixInput() {
    return this._s3Prefix;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_output_configurations - computed: false, optional: true, required: false
  private _s3OutputConfigurations = new BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList(this, "s3_output_configurations", false);
  public get s3OutputConfigurations() {
    return this._s3OutputConfigurations;
  }
  public putS3OutputConfigurations(value: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations[] | cdktn.IResolvable) {
    this._s3OutputConfigurations.internalValue = value;
  }
  public resetS3OutputConfigurations() {
    this._s3OutputConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputConfigurationsInput() {
    return this._s3OutputConfigurations.internalValue;
  }
}

export class BcmdataexportsExportExportDestinationConfigurationsS3DestinationList extends cdktn.ComplexList {
  public internalValue? : BcmdataexportsExportExportDestinationConfigurationsS3Destination[] | cdktn.IResolvable

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
  public get(index: number): BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference {
    return new BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BcmdataexportsExportExportDestinationConfigurations {
  /**
  * s3_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#s3_destination BcmdataexportsExport#s3_destination}
  */
  readonly s3Destination?: BcmdataexportsExportExportDestinationConfigurationsS3Destination[] | cdktn.IResolvable;
}

export function bcmdataexportsExportExportDestinationConfigurationsToTerraform(struct?: BcmdataexportsExportExportDestinationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_destination: cdktn.listMapper(bcmdataexportsExportExportDestinationConfigurationsS3DestinationToTerraform, true)(struct!.s3Destination),
  }
}


export function bcmdataexportsExportExportDestinationConfigurationsToHclTerraform(struct?: BcmdataexportsExportExportDestinationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_destination: {
      value: cdktn.listMapperHcl(bcmdataexportsExportExportDestinationConfigurationsS3DestinationToHclTerraform, true)(struct!.s3Destination),
      isBlock: true,
      type: "list",
      storageClassType: "BcmdataexportsExportExportDestinationConfigurationsS3DestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BcmdataexportsExportExportDestinationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BcmdataexportsExportExportDestinationConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Destination = this._s3Destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BcmdataexportsExportExportDestinationConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Destination.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Destination.internalValue = value.s3Destination;
    }
  }

  // s3_destination - computed: false, optional: true, required: false
  private _s3Destination = new BcmdataexportsExportExportDestinationConfigurationsS3DestinationList(this, "s3_destination", false);
  public get s3Destination() {
    return this._s3Destination;
  }
  public putS3Destination(value: BcmdataexportsExportExportDestinationConfigurationsS3Destination[] | cdktn.IResolvable) {
    this._s3Destination.internalValue = value;
  }
  public resetS3Destination() {
    this._s3Destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationInput() {
    return this._s3Destination.internalValue;
  }
}

export class BcmdataexportsExportExportDestinationConfigurationsList extends cdktn.ComplexList {
  public internalValue? : BcmdataexportsExportExportDestinationConfigurations[] | cdktn.IResolvable

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
  public get(index: number): BcmdataexportsExportExportDestinationConfigurationsOutputReference {
    return new BcmdataexportsExportExportDestinationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BcmdataexportsExportExportRefreshCadence {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#frequency BcmdataexportsExport#frequency}
  */
  readonly frequency: string;
}

export function bcmdataexportsExportExportRefreshCadenceToTerraform(struct?: BcmdataexportsExportExportRefreshCadence | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    frequency: cdktn.stringToTerraform(struct!.frequency),
  }
}


export function bcmdataexportsExportExportRefreshCadenceToHclTerraform(struct?: BcmdataexportsExportExportRefreshCadence | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    frequency: {
      value: cdktn.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BcmdataexportsExportExportRefreshCadenceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BcmdataexportsExportExportRefreshCadence | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BcmdataexportsExportExportRefreshCadence | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequency = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}

export class BcmdataexportsExportExportRefreshCadenceList extends cdktn.ComplexList {
  public internalValue? : BcmdataexportsExportExportRefreshCadence[] | cdktn.IResolvable

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
  public get(index: number): BcmdataexportsExportExportRefreshCadenceOutputReference {
    return new BcmdataexportsExportExportRefreshCadenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BcmdataexportsExportExport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#description BcmdataexportsExport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#name BcmdataexportsExport#name}
  */
  readonly name: string;
  /**
  * data_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#data_query BcmdataexportsExport#data_query}
  */
  readonly dataQuery?: BcmdataexportsExportExportDataQuery[] | cdktn.IResolvable;
  /**
  * destination_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#destination_configurations BcmdataexportsExport#destination_configurations}
  */
  readonly destinationConfigurations?: BcmdataexportsExportExportDestinationConfigurations[] | cdktn.IResolvable;
  /**
  * refresh_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#refresh_cadence BcmdataexportsExport#refresh_cadence}
  */
  readonly refreshCadence?: BcmdataexportsExportExportRefreshCadence[] | cdktn.IResolvable;
}

export function bcmdataexportsExportExportToTerraform(struct?: BcmdataexportsExportExport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    data_query: cdktn.listMapper(bcmdataexportsExportExportDataQueryToTerraform, true)(struct!.dataQuery),
    destination_configurations: cdktn.listMapper(bcmdataexportsExportExportDestinationConfigurationsToTerraform, true)(struct!.destinationConfigurations),
    refresh_cadence: cdktn.listMapper(bcmdataexportsExportExportRefreshCadenceToTerraform, true)(struct!.refreshCadence),
  }
}


export function bcmdataexportsExportExportToHclTerraform(struct?: BcmdataexportsExportExport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_query: {
      value: cdktn.listMapperHcl(bcmdataexportsExportExportDataQueryToHclTerraform, true)(struct!.dataQuery),
      isBlock: true,
      type: "list",
      storageClassType: "BcmdataexportsExportExportDataQueryList",
    },
    destination_configurations: {
      value: cdktn.listMapperHcl(bcmdataexportsExportExportDestinationConfigurationsToHclTerraform, true)(struct!.destinationConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "BcmdataexportsExportExportDestinationConfigurationsList",
    },
    refresh_cadence: {
      value: cdktn.listMapperHcl(bcmdataexportsExportExportRefreshCadenceToHclTerraform, true)(struct!.refreshCadence),
      isBlock: true,
      type: "list",
      storageClassType: "BcmdataexportsExportExportRefreshCadenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BcmdataexportsExportExportOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BcmdataexportsExportExport | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._dataQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataQuery = this._dataQuery?.internalValue;
    }
    if (this._destinationConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationConfigurations = this._destinationConfigurations?.internalValue;
    }
    if (this._refreshCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshCadence = this._refreshCadence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BcmdataexportsExportExport | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._dataQuery.internalValue = undefined;
      this._destinationConfigurations.internalValue = undefined;
      this._refreshCadence.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._dataQuery.internalValue = value.dataQuery;
      this._destinationConfigurations.internalValue = value.destinationConfigurations;
      this._refreshCadence.internalValue = value.refreshCadence;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // export_arn - computed: true, optional: false, required: false
  public get exportArn() {
    return this.getStringAttribute('export_arn');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // data_query - computed: false, optional: true, required: false
  private _dataQuery = new BcmdataexportsExportExportDataQueryList(this, "data_query", false);
  public get dataQuery() {
    return this._dataQuery;
  }
  public putDataQuery(value: BcmdataexportsExportExportDataQuery[] | cdktn.IResolvable) {
    this._dataQuery.internalValue = value;
  }
  public resetDataQuery() {
    this._dataQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQueryInput() {
    return this._dataQuery.internalValue;
  }

  // destination_configurations - computed: false, optional: true, required: false
  private _destinationConfigurations = new BcmdataexportsExportExportDestinationConfigurationsList(this, "destination_configurations", false);
  public get destinationConfigurations() {
    return this._destinationConfigurations;
  }
  public putDestinationConfigurations(value: BcmdataexportsExportExportDestinationConfigurations[] | cdktn.IResolvable) {
    this._destinationConfigurations.internalValue = value;
  }
  public resetDestinationConfigurations() {
    this._destinationConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigurationsInput() {
    return this._destinationConfigurations.internalValue;
  }

  // refresh_cadence - computed: false, optional: true, required: false
  private _refreshCadence = new BcmdataexportsExportExportRefreshCadenceList(this, "refresh_cadence", false);
  public get refreshCadence() {
    return this._refreshCadence;
  }
  public putRefreshCadence(value: BcmdataexportsExportExportRefreshCadence[] | cdktn.IResolvable) {
    this._refreshCadence.internalValue = value;
  }
  public resetRefreshCadence() {
    this._refreshCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshCadenceInput() {
    return this._refreshCadence.internalValue;
  }
}

export class BcmdataexportsExportExportList extends cdktn.ComplexList {
  public internalValue? : BcmdataexportsExportExport[] | cdktn.IResolvable

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
  public get(index: number): BcmdataexportsExportExportOutputReference {
    return new BcmdataexportsExportExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BcmdataexportsExportTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#create BcmdataexportsExport#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#update BcmdataexportsExport#update}
  */
  readonly update?: string;
}

export function bcmdataexportsExportTimeoutsToTerraform(struct?: BcmdataexportsExportTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function bcmdataexportsExportTimeoutsToHclTerraform(struct?: BcmdataexportsExportTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BcmdataexportsExportTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BcmdataexportsExportTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BcmdataexportsExportTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export aws_bcmdataexports_export}
*/
export class BcmdataexportsExport extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bcmdataexports_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BcmdataexportsExport resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BcmdataexportsExport to import
  * @param importFromId The id of the existing BcmdataexportsExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BcmdataexportsExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bcmdataexports_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bcmdataexports_export aws_bcmdataexports_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BcmdataexportsExportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BcmdataexportsExportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_bcmdataexports_export',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.56.0',
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
    this._tags = config.tags;
    this._export.internalValue = config.export;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // export - computed: false, optional: true, required: false
  private _export = new BcmdataexportsExportExportList(this, "export", false);
  public get export() {
    return this._export;
  }
  public putExport(value: BcmdataexportsExportExport[] | cdktn.IResolvable) {
    this._export.internalValue = value;
  }
  public resetExport() {
    this._export.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BcmdataexportsExportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BcmdataexportsExportTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      export: cdktn.listMapper(bcmdataexportsExportExportToTerraform, true)(this._export.internalValue),
      timeouts: bcmdataexportsExportTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      export: {
        value: cdktn.listMapperHcl(bcmdataexportsExportExportToHclTerraform, true)(this._export.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BcmdataexportsExportExportList",
      },
      timeouts: {
        value: bcmdataexportsExportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BcmdataexportsExportTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

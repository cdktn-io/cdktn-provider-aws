/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/vpclattice_service_network_service_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsVpclatticeServiceNetworkServiceAssociationsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/vpclattice_service_network_service_associations#region DataAwsVpclatticeServiceNetworkServiceAssociations#region}
  */
  readonly region?: string;
  /**
  * ID or ARN of the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/vpclattice_service_network_service_associations#service_identifier DataAwsVpclatticeServiceNetworkServiceAssociations#service_identifier}
  */
  readonly serviceIdentifier?: string;
  /**
  * ID or ARN of the Service Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/vpclattice_service_network_service_associations#service_network_identifier DataAwsVpclatticeServiceNetworkServiceAssociations#service_network_identifier}
  */
  readonly serviceNetworkIdentifier?: string;
}
export interface DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry {
}

export function dataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryToTerraform(struct?: DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryToHclTerraform(struct?: DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
}

export class DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference {
    return new DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsVpclatticeServiceNetworkServiceAssociationsItems {
}

export function dataAwsVpclatticeServiceNetworkServiceAssociationsItemsToTerraform(struct?: DataAwsVpclatticeServiceNetworkServiceAssociationsItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsVpclatticeServiceNetworkServiceAssociationsItemsToHclTerraform(struct?: DataAwsVpclatticeServiceNetworkServiceAssociationsItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsVpclatticeServiceNetworkServiceAssociationsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsVpclatticeServiceNetworkServiceAssociationsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // custom_domain_name - computed: true, optional: false, required: false
  public get customDomainName() {
    return this.getStringAttribute('custom_domain_name');
  }

  // dns_entry - computed: true, optional: false, required: false
  private _dnsEntry = new DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList(this, "dns_entry", false);
  public get dnsEntry() {
    return this._dnsEntry;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_arn - computed: true, optional: false, required: false
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_network_arn - computed: true, optional: false, required: false
  public get serviceNetworkArn() {
    return this.getStringAttribute('service_network_arn');
  }

  // service_network_id - computed: true, optional: false, required: false
  public get serviceNetworkId() {
    return this.getStringAttribute('service_network_id');
  }

  // service_network_name - computed: true, optional: false, required: false
  public get serviceNetworkName() {
    return this.getStringAttribute('service_network_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference {
    return new DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/vpclattice_service_network_service_associations aws_vpclattice_service_network_service_associations}
*/
export class DataAwsVpclatticeServiceNetworkServiceAssociations extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpclattice_service_network_service_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsVpclatticeServiceNetworkServiceAssociations resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsVpclatticeServiceNetworkServiceAssociations to import
  * @param importFromId The id of the existing DataAwsVpclatticeServiceNetworkServiceAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/vpclattice_service_network_service_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsVpclatticeServiceNetworkServiceAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpclattice_service_network_service_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/vpclattice_service_network_service_associations aws_vpclattice_service_network_service_associations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsVpclatticeServiceNetworkServiceAssociationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsVpclatticeServiceNetworkServiceAssociationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_vpclattice_service_network_service_associations',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.61.0',
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
    this._serviceIdentifier = config.serviceIdentifier;
    this._serviceNetworkIdentifier = config.serviceNetworkIdentifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList(this, "items", false);
  public get items() {
    return this._items;
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

  // service_identifier - computed: false, optional: true, required: false
  private _serviceIdentifier?: string; 
  public get serviceIdentifier() {
    return this.getStringAttribute('service_identifier');
  }
  public set serviceIdentifier(value: string) {
    this._serviceIdentifier = value;
  }
  public resetServiceIdentifier() {
    this._serviceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdentifierInput() {
    return this._serviceIdentifier;
  }

  // service_network_identifier - computed: false, optional: true, required: false
  private _serviceNetworkIdentifier?: string; 
  public get serviceNetworkIdentifier() {
    return this.getStringAttribute('service_network_identifier');
  }
  public set serviceNetworkIdentifier(value: string) {
    this._serviceNetworkIdentifier = value;
  }
  public resetServiceNetworkIdentifier() {
    this._serviceNetworkIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworkIdentifierInput() {
    return this._serviceNetworkIdentifier;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      service_identifier: cdktn.stringToTerraform(this._serviceIdentifier),
      service_network_identifier: cdktn.stringToTerraform(this._serviceNetworkIdentifier),
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
      service_identifier: {
        value: cdktn.stringToHclTerraform(this._serviceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_network_identifier: {
        value: cdktn.stringToHclTerraform(this._serviceNetworkIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

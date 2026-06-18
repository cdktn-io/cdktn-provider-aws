/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RedshiftNamespaceRegistrationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}
  */
  readonly consumerIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}
  */
  readonly namespaceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}
  */
  readonly provisionedClusterIdentifier?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#region RedshiftNamespaceRegistration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}
  */
  readonly serverlessNamespaceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}
  */
  readonly serverlessWorkgroupIdentifier?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration aws_redshift_namespace_registration}
*/
export class RedshiftNamespaceRegistration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_namespace_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RedshiftNamespaceRegistration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftNamespaceRegistration to import
  * @param importFromId The id of the existing RedshiftNamespaceRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftNamespaceRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_namespace_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration aws_redshift_namespace_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftNamespaceRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftNamespaceRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_namespace_registration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.51.0',
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
    this._consumerIdentifier = config.consumerIdentifier;
    this._namespaceType = config.namespaceType;
    this._provisionedClusterIdentifier = config.provisionedClusterIdentifier;
    this._region = config.region;
    this._serverlessNamespaceIdentifier = config.serverlessNamespaceIdentifier;
    this._serverlessWorkgroupIdentifier = config.serverlessWorkgroupIdentifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_identifier - computed: false, optional: false, required: true
  private _consumerIdentifier?: string; 
  public get consumerIdentifier() {
    return this.getStringAttribute('consumer_identifier');
  }
  public set consumerIdentifier(value: string) {
    this._consumerIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIdentifierInput() {
    return this._consumerIdentifier;
  }

  // namespace_type - computed: false, optional: false, required: true
  private _namespaceType?: string; 
  public get namespaceType() {
    return this.getStringAttribute('namespace_type');
  }
  public set namespaceType(value: string) {
    this._namespaceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTypeInput() {
    return this._namespaceType;
  }

  // provisioned_cluster_identifier - computed: false, optional: true, required: false
  private _provisionedClusterIdentifier?: string; 
  public get provisionedClusterIdentifier() {
    return this.getStringAttribute('provisioned_cluster_identifier');
  }
  public set provisionedClusterIdentifier(value: string) {
    this._provisionedClusterIdentifier = value;
  }
  public resetProvisionedClusterIdentifier() {
    this._provisionedClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedClusterIdentifierInput() {
    return this._provisionedClusterIdentifier;
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

  // serverless_namespace_identifier - computed: false, optional: true, required: false
  private _serverlessNamespaceIdentifier?: string; 
  public get serverlessNamespaceIdentifier() {
    return this.getStringAttribute('serverless_namespace_identifier');
  }
  public set serverlessNamespaceIdentifier(value: string) {
    this._serverlessNamespaceIdentifier = value;
  }
  public resetServerlessNamespaceIdentifier() {
    this._serverlessNamespaceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessNamespaceIdentifierInput() {
    return this._serverlessNamespaceIdentifier;
  }

  // serverless_workgroup_identifier - computed: false, optional: true, required: false
  private _serverlessWorkgroupIdentifier?: string; 
  public get serverlessWorkgroupIdentifier() {
    return this.getStringAttribute('serverless_workgroup_identifier');
  }
  public set serverlessWorkgroupIdentifier(value: string) {
    this._serverlessWorkgroupIdentifier = value;
  }
  public resetServerlessWorkgroupIdentifier() {
    this._serverlessWorkgroupIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessWorkgroupIdentifierInput() {
    return this._serverlessWorkgroupIdentifier;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_identifier: cdktn.stringToTerraform(this._consumerIdentifier),
      namespace_type: cdktn.stringToTerraform(this._namespaceType),
      provisioned_cluster_identifier: cdktn.stringToTerraform(this._provisionedClusterIdentifier),
      region: cdktn.stringToTerraform(this._region),
      serverless_namespace_identifier: cdktn.stringToTerraform(this._serverlessNamespaceIdentifier),
      serverless_workgroup_identifier: cdktn.stringToTerraform(this._serverlessWorkgroupIdentifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_identifier: {
        value: cdktn.stringToHclTerraform(this._consumerIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_type: {
        value: cdktn.stringToHclTerraform(this._namespaceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_cluster_identifier: {
        value: cdktn.stringToHclTerraform(this._provisionedClusterIdentifier),
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
      serverless_namespace_identifier: {
        value: cdktn.stringToHclTerraform(this._serverlessNamespaceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverless_workgroup_identifier: {
        value: cdktn.stringToHclTerraform(this._serverlessWorkgroupIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

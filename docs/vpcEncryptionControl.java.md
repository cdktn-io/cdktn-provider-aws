# `vpcEncryptionControl` Submodule <a name="`vpcEncryptionControl` Submodule" id="@cdktf/provider-aws.vpcEncryptionControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEncryptionControl <a name="VpcEncryptionControl" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control aws_vpc_encryption_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControl;

VpcEncryptionControl.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mode(java.lang.String)
    .vpcId(java.lang.String)
//  .egressOnlyInternetGatewayExclusion(java.lang.String)
//  .elasticFileSystemExclusion(java.lang.String)
//  .internetGatewayExclusion(java.lang.String)
//  .lambdaExclusion(java.lang.String)
//  .natGatewayExclusion(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpcEncryptionControlTimeouts)
//  .virtualPrivateGatewayExclusion(java.lang.String)
//  .vpcLatticeExclusion(java.lang.String)
//  .vpcPeeringExclusion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#mode VpcEncryptionControl#mode}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_id VpcEncryptionControl#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.egressOnlyInternetGatewayExclusion">egressOnlyInternetGatewayExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#egress_only_internet_gateway_exclusion VpcEncryptionControl#egress_only_internet_gateway_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.elasticFileSystemExclusion">elasticFileSystemExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#elastic_file_system_exclusion VpcEncryptionControl#elastic_file_system_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.internetGatewayExclusion">internetGatewayExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#internet_gateway_exclusion VpcEncryptionControl#internet_gateway_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.lambdaExclusion">lambdaExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#lambda_exclusion VpcEncryptionControl#lambda_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.natGatewayExclusion">natGatewayExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#nat_gateway_exclusion VpcEncryptionControl#nat_gateway_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#tags VpcEncryptionControl#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.virtualPrivateGatewayExclusion">virtualPrivateGatewayExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#virtual_private_gateway_exclusion VpcEncryptionControl#virtual_private_gateway_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.vpcLatticeExclusion">vpcLatticeExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_lattice_exclusion VpcEncryptionControl#vpc_lattice_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.vpcPeeringExclusion">vpcPeeringExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_peering_exclusion VpcEncryptionControl#vpc_peering_exclusion}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#mode VpcEncryptionControl#mode}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_id VpcEncryptionControl#vpc_id}.

---

##### `egressOnlyInternetGatewayExclusion`<sup>Optional</sup> <a name="egressOnlyInternetGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.egressOnlyInternetGatewayExclusion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#egress_only_internet_gateway_exclusion VpcEncryptionControl#egress_only_internet_gateway_exclusion}.

---

##### `elasticFileSystemExclusion`<sup>Optional</sup> <a name="elasticFileSystemExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.elasticFileSystemExclusion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#elastic_file_system_exclusion VpcEncryptionControl#elastic_file_system_exclusion}.

---

##### `internetGatewayExclusion`<sup>Optional</sup> <a name="internetGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.internetGatewayExclusion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#internet_gateway_exclusion VpcEncryptionControl#internet_gateway_exclusion}.

---

##### `lambdaExclusion`<sup>Optional</sup> <a name="lambdaExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.lambdaExclusion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#lambda_exclusion VpcEncryptionControl#lambda_exclusion}.

---

##### `natGatewayExclusion`<sup>Optional</sup> <a name="natGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.natGatewayExclusion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#nat_gateway_exclusion VpcEncryptionControl#nat_gateway_exclusion}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#region VpcEncryptionControl#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#tags VpcEncryptionControl#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#timeouts VpcEncryptionControl#timeouts}

---

##### `virtualPrivateGatewayExclusion`<sup>Optional</sup> <a name="virtualPrivateGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.virtualPrivateGatewayExclusion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#virtual_private_gateway_exclusion VpcEncryptionControl#virtual_private_gateway_exclusion}.

---

##### `vpcLatticeExclusion`<sup>Optional</sup> <a name="vpcLatticeExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.vpcLatticeExclusion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_lattice_exclusion VpcEncryptionControl#vpc_lattice_exclusion}.

---

##### `vpcPeeringExclusion`<sup>Optional</sup> <a name="vpcPeeringExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.vpcPeeringExclusion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_peering_exclusion VpcEncryptionControl#vpc_peering_exclusion}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetEgressOnlyInternetGatewayExclusion">resetEgressOnlyInternetGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetElasticFileSystemExclusion">resetElasticFileSystemExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetInternetGatewayExclusion">resetInternetGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetLambdaExclusion">resetLambdaExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetNatGatewayExclusion">resetNatGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVirtualPrivateGatewayExclusion">resetVirtualPrivateGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVpcLatticeExclusion">resetVpcLatticeExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVpcPeeringExclusion">resetVpcPeeringExclusion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.putTimeouts"></a>

```java
public void putTimeouts(VpcEncryptionControlTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a>

---

##### `resetEgressOnlyInternetGatewayExclusion` <a name="resetEgressOnlyInternetGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetEgressOnlyInternetGatewayExclusion"></a>

```java
public void resetEgressOnlyInternetGatewayExclusion()
```

##### `resetElasticFileSystemExclusion` <a name="resetElasticFileSystemExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetElasticFileSystemExclusion"></a>

```java
public void resetElasticFileSystemExclusion()
```

##### `resetInternetGatewayExclusion` <a name="resetInternetGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetInternetGatewayExclusion"></a>

```java
public void resetInternetGatewayExclusion()
```

##### `resetLambdaExclusion` <a name="resetLambdaExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetLambdaExclusion"></a>

```java
public void resetLambdaExclusion()
```

##### `resetNatGatewayExclusion` <a name="resetNatGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetNatGatewayExclusion"></a>

```java
public void resetNatGatewayExclusion()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualPrivateGatewayExclusion` <a name="resetVirtualPrivateGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVirtualPrivateGatewayExclusion"></a>

```java
public void resetVirtualPrivateGatewayExclusion()
```

##### `resetVpcLatticeExclusion` <a name="resetVpcLatticeExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVpcLatticeExclusion"></a>

```java
public void resetVpcLatticeExclusion()
```

##### `resetVpcPeeringExclusion` <a name="resetVpcPeeringExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVpcPeeringExclusion"></a>

```java
public void resetVpcPeeringExclusion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcEncryptionControl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControl;

VpcEncryptionControl.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControl;

VpcEncryptionControl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControl;

VpcEncryptionControl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControl;

VpcEncryptionControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpcEncryptionControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VpcEncryptionControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpcEncryptionControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpcEncryptionControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VpcEncryptionControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.resourceExclusions">resourceExclusions</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference">VpcEncryptionControlResourceExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference">VpcEncryptionControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInput">egressOnlyInternetGatewayExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.elasticFileSystemExclusionInput">elasticFileSystemExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.internetGatewayExclusionInput">internetGatewayExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lambdaExclusionInput">lambdaExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.natGatewayExclusionInput">natGatewayExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.virtualPrivateGatewayExclusionInput">virtualPrivateGatewayExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcLatticeExclusionInput">vpcLatticeExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcPeeringExclusionInput">vpcPeeringExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.egressOnlyInternetGatewayExclusion">egressOnlyInternetGatewayExclusion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.elasticFileSystemExclusion">elasticFileSystemExclusion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.internetGatewayExclusion">internetGatewayExclusion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lambdaExclusion">lambdaExclusion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.natGatewayExclusion">natGatewayExclusion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.virtualPrivateGatewayExclusion">virtualPrivateGatewayExclusion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcLatticeExclusion">vpcLatticeExclusion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcPeeringExclusion">vpcPeeringExclusion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceExclusions`<sup>Required</sup> <a name="resourceExclusions" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.resourceExclusions"></a>

```java
public VpcEncryptionControlResourceExclusionsOutputReference getResourceExclusions();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference">VpcEncryptionControlResourceExclusionsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.timeouts"></a>

```java
public VpcEncryptionControlTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference">VpcEncryptionControlTimeoutsOutputReference</a>

---

##### `egressOnlyInternetGatewayExclusionInput`<sup>Optional</sup> <a name="egressOnlyInternetGatewayExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInput"></a>

```java
public java.lang.String getEgressOnlyInternetGatewayExclusionInput();
```

- *Type:* java.lang.String

---

##### `elasticFileSystemExclusionInput`<sup>Optional</sup> <a name="elasticFileSystemExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.elasticFileSystemExclusionInput"></a>

```java
public java.lang.String getElasticFileSystemExclusionInput();
```

- *Type:* java.lang.String

---

##### `internetGatewayExclusionInput`<sup>Optional</sup> <a name="internetGatewayExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.internetGatewayExclusionInput"></a>

```java
public java.lang.String getInternetGatewayExclusionInput();
```

- *Type:* java.lang.String

---

##### `lambdaExclusionInput`<sup>Optional</sup> <a name="lambdaExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lambdaExclusionInput"></a>

```java
public java.lang.String getLambdaExclusionInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `natGatewayExclusionInput`<sup>Optional</sup> <a name="natGatewayExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.natGatewayExclusionInput"></a>

```java
public java.lang.String getNatGatewayExclusionInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.timeoutsInput"></a>

```java
public IResolvable|VpcEncryptionControlTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a>

---

##### `virtualPrivateGatewayExclusionInput`<sup>Optional</sup> <a name="virtualPrivateGatewayExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.virtualPrivateGatewayExclusionInput"></a>

```java
public java.lang.String getVirtualPrivateGatewayExclusionInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `vpcLatticeExclusionInput`<sup>Optional</sup> <a name="vpcLatticeExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcLatticeExclusionInput"></a>

```java
public java.lang.String getVpcLatticeExclusionInput();
```

- *Type:* java.lang.String

---

##### `vpcPeeringExclusionInput`<sup>Optional</sup> <a name="vpcPeeringExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcPeeringExclusionInput"></a>

```java
public java.lang.String getVpcPeeringExclusionInput();
```

- *Type:* java.lang.String

---

##### `egressOnlyInternetGatewayExclusion`<sup>Required</sup> <a name="egressOnlyInternetGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.egressOnlyInternetGatewayExclusion"></a>

```java
public java.lang.String getEgressOnlyInternetGatewayExclusion();
```

- *Type:* java.lang.String

---

##### `elasticFileSystemExclusion`<sup>Required</sup> <a name="elasticFileSystemExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.elasticFileSystemExclusion"></a>

```java
public java.lang.String getElasticFileSystemExclusion();
```

- *Type:* java.lang.String

---

##### `internetGatewayExclusion`<sup>Required</sup> <a name="internetGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.internetGatewayExclusion"></a>

```java
public java.lang.String getInternetGatewayExclusion();
```

- *Type:* java.lang.String

---

##### `lambdaExclusion`<sup>Required</sup> <a name="lambdaExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lambdaExclusion"></a>

```java
public java.lang.String getLambdaExclusion();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `natGatewayExclusion`<sup>Required</sup> <a name="natGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.natGatewayExclusion"></a>

```java
public java.lang.String getNatGatewayExclusion();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualPrivateGatewayExclusion`<sup>Required</sup> <a name="virtualPrivateGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.virtualPrivateGatewayExclusion"></a>

```java
public java.lang.String getVirtualPrivateGatewayExclusion();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `vpcLatticeExclusion`<sup>Required</sup> <a name="vpcLatticeExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcLatticeExclusion"></a>

```java
public java.lang.String getVpcLatticeExclusion();
```

- *Type:* java.lang.String

---

##### `vpcPeeringExclusion`<sup>Required</sup> <a name="vpcPeeringExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcPeeringExclusion"></a>

```java
public java.lang.String getVpcPeeringExclusion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEncryptionControlConfig <a name="VpcEncryptionControlConfig" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlConfig;

VpcEncryptionControlConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mode(java.lang.String)
    .vpcId(java.lang.String)
//  .egressOnlyInternetGatewayExclusion(java.lang.String)
//  .elasticFileSystemExclusion(java.lang.String)
//  .internetGatewayExclusion(java.lang.String)
//  .lambdaExclusion(java.lang.String)
//  .natGatewayExclusion(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpcEncryptionControlTimeouts)
//  .virtualPrivateGatewayExclusion(java.lang.String)
//  .vpcLatticeExclusion(java.lang.String)
//  .vpcPeeringExclusion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#mode VpcEncryptionControl#mode}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_id VpcEncryptionControl#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.egressOnlyInternetGatewayExclusion">egressOnlyInternetGatewayExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#egress_only_internet_gateway_exclusion VpcEncryptionControl#egress_only_internet_gateway_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.elasticFileSystemExclusion">elasticFileSystemExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#elastic_file_system_exclusion VpcEncryptionControl#elastic_file_system_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.internetGatewayExclusion">internetGatewayExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#internet_gateway_exclusion VpcEncryptionControl#internet_gateway_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.lambdaExclusion">lambdaExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#lambda_exclusion VpcEncryptionControl#lambda_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.natGatewayExclusion">natGatewayExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#nat_gateway_exclusion VpcEncryptionControl#nat_gateway_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#tags VpcEncryptionControl#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.virtualPrivateGatewayExclusion">virtualPrivateGatewayExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#virtual_private_gateway_exclusion VpcEncryptionControl#virtual_private_gateway_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcLatticeExclusion">vpcLatticeExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_lattice_exclusion VpcEncryptionControl#vpc_lattice_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcPeeringExclusion">vpcPeeringExclusion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_peering_exclusion VpcEncryptionControl#vpc_peering_exclusion}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#mode VpcEncryptionControl#mode}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_id VpcEncryptionControl#vpc_id}.

---

##### `egressOnlyInternetGatewayExclusion`<sup>Optional</sup> <a name="egressOnlyInternetGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.egressOnlyInternetGatewayExclusion"></a>

```java
public java.lang.String getEgressOnlyInternetGatewayExclusion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#egress_only_internet_gateway_exclusion VpcEncryptionControl#egress_only_internet_gateway_exclusion}.

---

##### `elasticFileSystemExclusion`<sup>Optional</sup> <a name="elasticFileSystemExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.elasticFileSystemExclusion"></a>

```java
public java.lang.String getElasticFileSystemExclusion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#elastic_file_system_exclusion VpcEncryptionControl#elastic_file_system_exclusion}.

---

##### `internetGatewayExclusion`<sup>Optional</sup> <a name="internetGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.internetGatewayExclusion"></a>

```java
public java.lang.String getInternetGatewayExclusion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#internet_gateway_exclusion VpcEncryptionControl#internet_gateway_exclusion}.

---

##### `lambdaExclusion`<sup>Optional</sup> <a name="lambdaExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.lambdaExclusion"></a>

```java
public java.lang.String getLambdaExclusion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#lambda_exclusion VpcEncryptionControl#lambda_exclusion}.

---

##### `natGatewayExclusion`<sup>Optional</sup> <a name="natGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.natGatewayExclusion"></a>

```java
public java.lang.String getNatGatewayExclusion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#nat_gateway_exclusion VpcEncryptionControl#nat_gateway_exclusion}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#region VpcEncryptionControl#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#tags VpcEncryptionControl#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.timeouts"></a>

```java
public VpcEncryptionControlTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#timeouts VpcEncryptionControl#timeouts}

---

##### `virtualPrivateGatewayExclusion`<sup>Optional</sup> <a name="virtualPrivateGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.virtualPrivateGatewayExclusion"></a>

```java
public java.lang.String getVirtualPrivateGatewayExclusion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#virtual_private_gateway_exclusion VpcEncryptionControl#virtual_private_gateway_exclusion}.

---

##### `vpcLatticeExclusion`<sup>Optional</sup> <a name="vpcLatticeExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcLatticeExclusion"></a>

```java
public java.lang.String getVpcLatticeExclusion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_lattice_exclusion VpcEncryptionControl#vpc_lattice_exclusion}.

---

##### `vpcPeeringExclusion`<sup>Optional</sup> <a name="vpcPeeringExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcPeeringExclusion"></a>

```java
public java.lang.String getVpcPeeringExclusion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_peering_exclusion VpcEncryptionControl#vpc_peering_exclusion}.

---

### VpcEncryptionControlResourceExclusions <a name="VpcEncryptionControlResourceExclusions" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusions;

VpcEncryptionControlResourceExclusions.builder()
    .build();
```


### VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway <a name="VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway;

VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway.builder()
    .build();
```


### VpcEncryptionControlResourceExclusionsElasticFileSystem <a name="VpcEncryptionControlResourceExclusionsElasticFileSystem" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsElasticFileSystem;

VpcEncryptionControlResourceExclusionsElasticFileSystem.builder()
    .build();
```


### VpcEncryptionControlResourceExclusionsInternetGateway <a name="VpcEncryptionControlResourceExclusionsInternetGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsInternetGateway;

VpcEncryptionControlResourceExclusionsInternetGateway.builder()
    .build();
```


### VpcEncryptionControlResourceExclusionsLambda <a name="VpcEncryptionControlResourceExclusionsLambda" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambda.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsLambda;

VpcEncryptionControlResourceExclusionsLambda.builder()
    .build();
```


### VpcEncryptionControlResourceExclusionsNatGateway <a name="VpcEncryptionControlResourceExclusionsNatGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsNatGateway;

VpcEncryptionControlResourceExclusionsNatGateway.builder()
    .build();
```


### VpcEncryptionControlResourceExclusionsVirtualPrivateGateway <a name="VpcEncryptionControlResourceExclusionsVirtualPrivateGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsVirtualPrivateGateway;

VpcEncryptionControlResourceExclusionsVirtualPrivateGateway.builder()
    .build();
```


### VpcEncryptionControlResourceExclusionsVpcLattice <a name="VpcEncryptionControlResourceExclusionsVpcLattice" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLattice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLattice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsVpcLattice;

VpcEncryptionControlResourceExclusionsVpcLattice.builder()
    .build();
```


### VpcEncryptionControlResourceExclusionsVpcPeering <a name="VpcEncryptionControlResourceExclusionsVpcPeering" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsVpcPeering;

VpcEncryptionControlResourceExclusionsVpcPeering.builder()
    .build();
```


### VpcEncryptionControlTimeouts <a name="VpcEncryptionControlTimeouts" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlTimeouts;

VpcEncryptionControlTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#create VpcEncryptionControl#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#delete VpcEncryptionControl#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#update VpcEncryptionControl#update}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference <a name="VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference;

new VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue"></a>

```java
public VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a>

---


### VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference <a name="VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference;

new VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystem">VpcEncryptionControlResourceExclusionsElasticFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue"></a>

```java
public VpcEncryptionControlResourceExclusionsElasticFileSystem getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystem">VpcEncryptionControlResourceExclusionsElasticFileSystem</a>

---


### VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference <a name="VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference;

new VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGateway">VpcEncryptionControlResourceExclusionsInternetGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue"></a>

```java
public VpcEncryptionControlResourceExclusionsInternetGateway getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGateway">VpcEncryptionControlResourceExclusionsInternetGateway</a>

---


### VpcEncryptionControlResourceExclusionsLambdaOutputReference <a name="VpcEncryptionControlResourceExclusionsLambdaOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsLambdaOutputReference;

new VpcEncryptionControlResourceExclusionsLambdaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambda">VpcEncryptionControlResourceExclusionsLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue"></a>

```java
public VpcEncryptionControlResourceExclusionsLambda getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambda">VpcEncryptionControlResourceExclusionsLambda</a>

---


### VpcEncryptionControlResourceExclusionsNatGatewayOutputReference <a name="VpcEncryptionControlResourceExclusionsNatGatewayOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference;

new VpcEncryptionControlResourceExclusionsNatGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGateway">VpcEncryptionControlResourceExclusionsNatGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue"></a>

```java
public VpcEncryptionControlResourceExclusionsNatGateway getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGateway">VpcEncryptionControlResourceExclusionsNatGateway</a>

---


### VpcEncryptionControlResourceExclusionsOutputReference <a name="VpcEncryptionControlResourceExclusionsOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsOutputReference;

new VpcEncryptionControlResourceExclusionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway">egressOnlyInternetGateway</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem">elasticFileSystem</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway">internetGateway</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference">VpcEncryptionControlResourceExclusionsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.natGateway">natGateway</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference">VpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway">virtualPrivateGateway</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice">vpcLattice</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering">vpcPeering</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusions">VpcEncryptionControlResourceExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressOnlyInternetGateway`<sup>Required</sup> <a name="egressOnlyInternetGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway"></a>

```java
public VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference getEgressOnlyInternetGateway();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a>

---

##### `elasticFileSystem`<sup>Required</sup> <a name="elasticFileSystem" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem"></a>

```java
public VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference getElasticFileSystem();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a>

---

##### `internetGateway`<sup>Required</sup> <a name="internetGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway"></a>

```java
public VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference getInternetGateway();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.lambda"></a>

```java
public VpcEncryptionControlResourceExclusionsLambdaOutputReference getLambda();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference">VpcEncryptionControlResourceExclusionsLambdaOutputReference</a>

---

##### `natGateway`<sup>Required</sup> <a name="natGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.natGateway"></a>

```java
public VpcEncryptionControlResourceExclusionsNatGatewayOutputReference getNatGateway();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference">VpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a>

---

##### `virtualPrivateGateway`<sup>Required</sup> <a name="virtualPrivateGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway"></a>

```java
public VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference getVirtualPrivateGateway();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a>

---

##### `vpcLattice`<sup>Required</sup> <a name="vpcLattice" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice"></a>

```java
public VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference getVpcLattice();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a>

---

##### `vpcPeering`<sup>Required</sup> <a name="vpcPeering" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering"></a>

```java
public VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference getVpcPeering();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.internalValue"></a>

```java
public VpcEncryptionControlResourceExclusions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusions">VpcEncryptionControlResourceExclusions</a>

---


### VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference <a name="VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference;

new VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGateway">VpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue"></a>

```java
public VpcEncryptionControlResourceExclusionsVirtualPrivateGateway getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGateway">VpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a>

---


### VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference <a name="VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference;

new VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLattice">VpcEncryptionControlResourceExclusionsVpcLattice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue"></a>

```java
public VpcEncryptionControlResourceExclusionsVpcLattice getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLattice">VpcEncryptionControlResourceExclusionsVpcLattice</a>

---


### VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference <a name="VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference;

new VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeering">VpcEncryptionControlResourceExclusionsVpcPeering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue"></a>

```java
public VpcEncryptionControlResourceExclusionsVpcPeering getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeering">VpcEncryptionControlResourceExclusionsVpcPeering</a>

---


### VpcEncryptionControlTimeoutsOutputReference <a name="VpcEncryptionControlTimeoutsOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_encryption_control.VpcEncryptionControlTimeoutsOutputReference;

new VpcEncryptionControlTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VpcEncryptionControlTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a>

---




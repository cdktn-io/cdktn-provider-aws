# `ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation` Submodule <a name="`ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation` Submodule" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation <a name="Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association aws_ec2_local_gateway_route_table_virtual_interface_group_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_local_gateway_route_table_virtual_interface_group_association.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation;

Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .localGatewayRouteTableId(java.lang.String)
    .localGatewayVirtualInterfaceGroupId(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#local_gateway_route_table_id}. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.localGatewayVirtualInterfaceGroupId">localGatewayVirtualInterfaceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#local_gateway_virtual_interface_group_id Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#local_gateway_virtual_interface_group_id}. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#tags Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.localGatewayRouteTableId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#local_gateway_route_table_id}.

---

##### `localGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="localGatewayVirtualInterfaceGroupId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.localGatewayVirtualInterfaceGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#local_gateway_virtual_interface_group_id Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#local_gateway_virtual_interface_group_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#region Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#tags Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isConstruct"></a>

```java
import io.cdktn.providers.aws.ec2_local_gateway_route_table_virtual_interface_group_association.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation;

Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ec2_local_gateway_route_table_virtual_interface_group_association.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation;

Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ec2_local_gateway_route_table_virtual_interface_group_association.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation;

Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ec2_local_gateway_route_table_virtual_interface_group_association.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation;

Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableArn">localGatewayRouteTableArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableIdInput">localGatewayRouteTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayVirtualInterfaceGroupIdInput">localGatewayVirtualInterfaceGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayVirtualInterfaceGroupId">localGatewayVirtualInterfaceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayId"></a>

```java
public java.lang.String getLocalGatewayId();
```

- *Type:* java.lang.String

---

##### `localGatewayRouteTableArn`<sup>Required</sup> <a name="localGatewayRouteTableArn" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableArn"></a>

```java
public java.lang.String getLocalGatewayRouteTableArn();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `localGatewayRouteTableIdInput`<sup>Optional</sup> <a name="localGatewayRouteTableIdInput" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableIdInput"></a>

```java
public java.lang.String getLocalGatewayRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `localGatewayVirtualInterfaceGroupIdInput`<sup>Optional</sup> <a name="localGatewayVirtualInterfaceGroupIdInput" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayVirtualInterfaceGroupIdInput"></a>

```java
public java.lang.String getLocalGatewayVirtualInterfaceGroupIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableId"></a>

```java
public java.lang.String getLocalGatewayRouteTableId();
```

- *Type:* java.lang.String

---

##### `localGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="localGatewayVirtualInterfaceGroupId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayVirtualInterfaceGroupId"></a>

```java
public java.lang.String getLocalGatewayVirtualInterfaceGroupId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig <a name="Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_local_gateway_route_table_virtual_interface_group_association.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig;

Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .localGatewayRouteTableId(java.lang.String)
    .localGatewayVirtualInterfaceGroupId(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#local_gateway_route_table_id}. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.localGatewayVirtualInterfaceGroupId">localGatewayVirtualInterfaceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#local_gateway_virtual_interface_group_id Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#local_gateway_virtual_interface_group_id}. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#tags Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.localGatewayRouteTableId"></a>

```java
public java.lang.String getLocalGatewayRouteTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#local_gateway_route_table_id}.

---

##### `localGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="localGatewayVirtualInterfaceGroupId" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.localGatewayVirtualInterfaceGroupId"></a>

```java
public java.lang.String getLocalGatewayVirtualInterfaceGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#local_gateway_virtual_interface_group_id Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#local_gateway_virtual_interface_group_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#region Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#tags Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#tags}.

---




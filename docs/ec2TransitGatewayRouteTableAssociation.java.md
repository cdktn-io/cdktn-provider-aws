# `ec2TransitGatewayRouteTableAssociation` Submodule <a name="`ec2TransitGatewayRouteTableAssociation` Submodule" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayRouteTableAssociation <a name="Ec2TransitGatewayRouteTableAssociation" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association aws_ec2_transit_gateway_route_table_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_route_table_association.Ec2TransitGatewayRouteTableAssociation;

Ec2TransitGatewayRouteTableAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .transitGatewayAttachmentId(java.lang.String)
    .transitGatewayRouteTableId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .replaceExistingAssociation(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#transit_gateway_attachment_id Ec2TransitGatewayRouteTableAssociation#transit_gateway_attachment_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#transit_gateway_route_table_id Ec2TransitGatewayRouteTableAssociation#transit_gateway_route_table_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#id Ec2TransitGatewayRouteTableAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.replaceExistingAssociation">replaceExistingAssociation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#replace_existing_association Ec2TransitGatewayRouteTableAssociation#replace_existing_association}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.transitGatewayAttachmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#transit_gateway_attachment_id Ec2TransitGatewayRouteTableAssociation#transit_gateway_attachment_id}.

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.transitGatewayRouteTableId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#transit_gateway_route_table_id Ec2TransitGatewayRouteTableAssociation#transit_gateway_route_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#id Ec2TransitGatewayRouteTableAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#region Ec2TransitGatewayRouteTableAssociation#region}

---

##### `replaceExistingAssociation`<sup>Optional</sup> <a name="replaceExistingAssociation" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.Initializer.parameter.replaceExistingAssociation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#replace_existing_association Ec2TransitGatewayRouteTableAssociation#replace_existing_association}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.resetReplaceExistingAssociation">resetReplaceExistingAssociation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReplaceExistingAssociation` <a name="resetReplaceExistingAssociation" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.resetReplaceExistingAssociation"></a>

```java
public void resetReplaceExistingAssociation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayRouteTableAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.isConstruct"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_route_table_association.Ec2TransitGatewayRouteTableAssociation;

Ec2TransitGatewayRouteTableAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_route_table_association.Ec2TransitGatewayRouteTableAssociation;

Ec2TransitGatewayRouteTableAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_route_table_association.Ec2TransitGatewayRouteTableAssociation;

Ec2TransitGatewayRouteTableAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_route_table_association.Ec2TransitGatewayRouteTableAssociation;

Ec2TransitGatewayRouteTableAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2TransitGatewayRouteTableAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2TransitGatewayRouteTableAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2TransitGatewayRouteTableAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2TransitGatewayRouteTableAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayRouteTableAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.replaceExistingAssociationInput">replaceExistingAssociationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.transitGatewayAttachmentIdInput">transitGatewayAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.transitGatewayRouteTableIdInput">transitGatewayRouteTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.replaceExistingAssociation">replaceExistingAssociation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `replaceExistingAssociationInput`<sup>Optional</sup> <a name="replaceExistingAssociationInput" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.replaceExistingAssociationInput"></a>

```java
public java.lang.Boolean|IResolvable getReplaceExistingAssociationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `transitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transitGatewayAttachmentIdInput" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.transitGatewayAttachmentIdInput"></a>

```java
public java.lang.String getTransitGatewayAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="transitGatewayRouteTableIdInput" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.transitGatewayRouteTableIdInput"></a>

```java
public java.lang.String getTransitGatewayRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `replaceExistingAssociation`<sup>Required</sup> <a name="replaceExistingAssociation" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.replaceExistingAssociation"></a>

```java
public java.lang.Boolean|IResolvable getReplaceExistingAssociation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.transitGatewayRouteTableId"></a>

```java
public java.lang.String getTransitGatewayRouteTableId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayRouteTableAssociationConfig <a name="Ec2TransitGatewayRouteTableAssociationConfig" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_route_table_association.Ec2TransitGatewayRouteTableAssociationConfig;

Ec2TransitGatewayRouteTableAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .transitGatewayAttachmentId(java.lang.String)
    .transitGatewayRouteTableId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .replaceExistingAssociation(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#transit_gateway_attachment_id Ec2TransitGatewayRouteTableAssociation#transit_gateway_attachment_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#transit_gateway_route_table_id Ec2TransitGatewayRouteTableAssociation#transit_gateway_route_table_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#id Ec2TransitGatewayRouteTableAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.replaceExistingAssociation">replaceExistingAssociation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#replace_existing_association Ec2TransitGatewayRouteTableAssociation#replace_existing_association}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#transit_gateway_attachment_id Ec2TransitGatewayRouteTableAssociation#transit_gateway_attachment_id}.

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.transitGatewayRouteTableId"></a>

```java
public java.lang.String getTransitGatewayRouteTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#transit_gateway_route_table_id Ec2TransitGatewayRouteTableAssociation#transit_gateway_route_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#id Ec2TransitGatewayRouteTableAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#region Ec2TransitGatewayRouteTableAssociation#region}

---

##### `replaceExistingAssociation`<sup>Optional</sup> <a name="replaceExistingAssociation" id="@cdktn/provider-aws.ec2TransitGatewayRouteTableAssociation.Ec2TransitGatewayRouteTableAssociationConfig.property.replaceExistingAssociation"></a>

```java
public java.lang.Boolean|IResolvable getReplaceExistingAssociation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_route_table_association#replace_existing_association Ec2TransitGatewayRouteTableAssociation#replace_existing_association}.

---




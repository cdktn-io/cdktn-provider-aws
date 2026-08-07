# `ec2TransitGatewayMeteringPolicy` Submodule <a name="`ec2TransitGatewayMeteringPolicy` Submodule" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMeteringPolicy <a name="Ec2TransitGatewayMeteringPolicy" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy aws_ec2_transit_gateway_metering_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_metering_policy.Ec2TransitGatewayMeteringPolicy;

Ec2TransitGatewayMeteringPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .transitGatewayId(java.lang.String)
//  .middleboxAttachmentIds(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Ec2TransitGatewayMeteringPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#transit_gateway_id Ec2TransitGatewayMeteringPolicy#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.middleboxAttachmentIds">middleboxAttachmentIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#middlebox_attachment_ids Ec2TransitGatewayMeteringPolicy#middlebox_attachment_ids}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#tags Ec2TransitGatewayMeteringPolicy#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.transitGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#transit_gateway_id Ec2TransitGatewayMeteringPolicy#transit_gateway_id}.

---

##### `middleboxAttachmentIds`<sup>Optional</sup> <a name="middleboxAttachmentIds" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.middleboxAttachmentIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#middlebox_attachment_ids Ec2TransitGatewayMeteringPolicy#middlebox_attachment_ids}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#region Ec2TransitGatewayMeteringPolicy#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#tags Ec2TransitGatewayMeteringPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#timeouts Ec2TransitGatewayMeteringPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetMiddleboxAttachmentIds">resetMiddleboxAttachmentIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.putTimeouts"></a>

```java
public void putTimeouts(Ec2TransitGatewayMeteringPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a>

---

##### `resetMiddleboxAttachmentIds` <a name="resetMiddleboxAttachmentIds" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetMiddleboxAttachmentIds"></a>

```java
public void resetMiddleboxAttachmentIds()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayMeteringPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isConstruct"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_metering_policy.Ec2TransitGatewayMeteringPolicy;

Ec2TransitGatewayMeteringPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_metering_policy.Ec2TransitGatewayMeteringPolicy;

Ec2TransitGatewayMeteringPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_metering_policy.Ec2TransitGatewayMeteringPolicy;

Ec2TransitGatewayMeteringPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_metering_policy.Ec2TransitGatewayMeteringPolicy;

Ec2TransitGatewayMeteringPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2TransitGatewayMeteringPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2TransitGatewayMeteringPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2TransitGatewayMeteringPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2TransitGatewayMeteringPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayMeteringPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference">Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.transitGatewayMeteringPolicyId">transitGatewayMeteringPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.middleboxAttachmentIdsInput">middleboxAttachmentIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.middleboxAttachmentIds">middleboxAttachmentIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.timeouts"></a>

```java
public Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference">Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference</a>

---

##### `transitGatewayMeteringPolicyId`<sup>Required</sup> <a name="transitGatewayMeteringPolicyId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.transitGatewayMeteringPolicyId"></a>

```java
public java.lang.String getTransitGatewayMeteringPolicyId();
```

- *Type:* java.lang.String

---

##### `middleboxAttachmentIdsInput`<sup>Optional</sup> <a name="middleboxAttachmentIdsInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.middleboxAttachmentIdsInput"></a>

```java
public java.util.List<java.lang.String> getMiddleboxAttachmentIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.timeoutsInput"></a>

```java
public IResolvable|Ec2TransitGatewayMeteringPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a>

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.transitGatewayIdInput"></a>

```java
public java.lang.String getTransitGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `middleboxAttachmentIds`<sup>Required</sup> <a name="middleboxAttachmentIds" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.middleboxAttachmentIds"></a>

```java
public java.util.List<java.lang.String> getMiddleboxAttachmentIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMeteringPolicyConfig <a name="Ec2TransitGatewayMeteringPolicyConfig" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_metering_policy.Ec2TransitGatewayMeteringPolicyConfig;

Ec2TransitGatewayMeteringPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .transitGatewayId(java.lang.String)
//  .middleboxAttachmentIds(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Ec2TransitGatewayMeteringPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#transit_gateway_id Ec2TransitGatewayMeteringPolicy#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.middleboxAttachmentIds">middleboxAttachmentIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#middlebox_attachment_ids Ec2TransitGatewayMeteringPolicy#middlebox_attachment_ids}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#tags Ec2TransitGatewayMeteringPolicy#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#transit_gateway_id Ec2TransitGatewayMeteringPolicy#transit_gateway_id}.

---

##### `middleboxAttachmentIds`<sup>Optional</sup> <a name="middleboxAttachmentIds" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.middleboxAttachmentIds"></a>

```java
public java.util.List<java.lang.String> getMiddleboxAttachmentIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#middlebox_attachment_ids Ec2TransitGatewayMeteringPolicy#middlebox_attachment_ids}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#region Ec2TransitGatewayMeteringPolicy#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#tags Ec2TransitGatewayMeteringPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.timeouts"></a>

```java
public Ec2TransitGatewayMeteringPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#timeouts Ec2TransitGatewayMeteringPolicy#timeouts}

---

### Ec2TransitGatewayMeteringPolicyTimeouts <a name="Ec2TransitGatewayMeteringPolicyTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_metering_policy.Ec2TransitGatewayMeteringPolicyTimeouts;

Ec2TransitGatewayMeteringPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#create Ec2TransitGatewayMeteringPolicy#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#delete Ec2TransitGatewayMeteringPolicy#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_transit_gateway_metering_policy#update Ec2TransitGatewayMeteringPolicy#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference <a name="Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_metering_policy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference;

new Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2TransitGatewayMeteringPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a>

---




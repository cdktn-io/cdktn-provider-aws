# `ec2SecondarySubnet` Submodule <a name="`ec2SecondarySubnet` Submodule" id="@cdktn/provider-aws.ec2SecondarySubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecondarySubnet <a name="Ec2SecondarySubnet" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet aws_ec2_secondary_subnet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_secondary_subnet.Ec2SecondarySubnet;

Ec2SecondarySubnet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipv4CidrBlock(java.lang.String)
    .secondaryNetworkId(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .availabilityZoneId(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Ec2SecondarySubnetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.ipv4CidrBlock">ipv4CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#ipv4_cidr_block Ec2SecondarySubnet#ipv4_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.secondaryNetworkId">secondaryNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#secondary_network_id Ec2SecondarySubnet#secondary_network_id}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#availability_zone Ec2SecondarySubnet#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#availability_zone_id Ec2SecondarySubnet#availability_zone_id}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#tags Ec2SecondarySubnet#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipv4CidrBlock`<sup>Required</sup> <a name="ipv4CidrBlock" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.ipv4CidrBlock"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#ipv4_cidr_block Ec2SecondarySubnet#ipv4_cidr_block}.

---

##### `secondaryNetworkId`<sup>Required</sup> <a name="secondaryNetworkId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.secondaryNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#secondary_network_id Ec2SecondarySubnet#secondary_network_id}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#availability_zone Ec2SecondarySubnet#availability_zone}.

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.availabilityZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#availability_zone_id Ec2SecondarySubnet#availability_zone_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#region Ec2SecondarySubnet#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#tags Ec2SecondarySubnet#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#timeouts Ec2SecondarySubnet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetAvailabilityZoneId">resetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.putTimeouts"></a>

```java
public void putTimeouts(Ec2SecondarySubnetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetAvailabilityZoneId` <a name="resetAvailabilityZoneId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetAvailabilityZoneId"></a>

```java
public void resetAvailabilityZoneId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SecondarySubnet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isConstruct"></a>

```java
import io.cdktn.providers.aws.ec2_secondary_subnet.Ec2SecondarySubnet;

Ec2SecondarySubnet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ec2_secondary_subnet.Ec2SecondarySubnet;

Ec2SecondarySubnet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ec2_secondary_subnet.Ec2SecondarySubnet;

Ec2SecondarySubnet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ec2_secondary_subnet.Ec2SecondarySubnet;

Ec2SecondarySubnet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2SecondarySubnet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2SecondarySubnet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2SecondarySubnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2SecondarySubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecondarySubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ipv4CidrBlockAssociations">ipv4CidrBlockAssociations</a></code> | <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList">Ec2SecondarySubnetIpv4CidrBlockAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondaryNetworkType">secondaryNetworkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondarySubnetId">secondarySubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference">Ec2SecondarySubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ipv4CidrBlockInput">ipv4CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondaryNetworkIdInput">secondaryNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ipv4CidrBlock">ipv4CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondaryNetworkId">secondaryNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipv4CidrBlockAssociations`<sup>Required</sup> <a name="ipv4CidrBlockAssociations" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ipv4CidrBlockAssociations"></a>

```java
public Ec2SecondarySubnetIpv4CidrBlockAssociationsList getIpv4CidrBlockAssociations();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList">Ec2SecondarySubnetIpv4CidrBlockAssociationsList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `secondaryNetworkType`<sup>Required</sup> <a name="secondaryNetworkType" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondaryNetworkType"></a>

```java
public java.lang.String getSecondaryNetworkType();
```

- *Type:* java.lang.String

---

##### `secondarySubnetId`<sup>Required</sup> <a name="secondarySubnetId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondarySubnetId"></a>

```java
public java.lang.String getSecondarySubnetId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.timeouts"></a>

```java
public Ec2SecondarySubnetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference">Ec2SecondarySubnetTimeoutsOutputReference</a>

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZoneIdInput"></a>

```java
public java.lang.String getAvailabilityZoneIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `ipv4CidrBlockInput`<sup>Optional</sup> <a name="ipv4CidrBlockInput" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ipv4CidrBlockInput"></a>

```java
public java.lang.String getIpv4CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secondaryNetworkIdInput`<sup>Optional</sup> <a name="secondaryNetworkIdInput" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondaryNetworkIdInput"></a>

```java
public java.lang.String getSecondaryNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.timeoutsInput"></a>

```java
public IResolvable|Ec2SecondarySubnetTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

---

##### `ipv4CidrBlock`<sup>Required</sup> <a name="ipv4CidrBlock" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ipv4CidrBlock"></a>

```java
public java.lang.String getIpv4CidrBlock();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `secondaryNetworkId`<sup>Required</sup> <a name="secondaryNetworkId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondaryNetworkId"></a>

```java
public java.lang.String getSecondaryNetworkId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecondarySubnetConfig <a name="Ec2SecondarySubnetConfig" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_secondary_subnet.Ec2SecondarySubnetConfig;

Ec2SecondarySubnetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipv4CidrBlock(java.lang.String)
    .secondaryNetworkId(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .availabilityZoneId(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Ec2SecondarySubnetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.ipv4CidrBlock">ipv4CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#ipv4_cidr_block Ec2SecondarySubnet#ipv4_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.secondaryNetworkId">secondaryNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#secondary_network_id Ec2SecondarySubnet#secondary_network_id}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#availability_zone Ec2SecondarySubnet#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#availability_zone_id Ec2SecondarySubnet#availability_zone_id}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#tags Ec2SecondarySubnet#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipv4CidrBlock`<sup>Required</sup> <a name="ipv4CidrBlock" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.ipv4CidrBlock"></a>

```java
public java.lang.String getIpv4CidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#ipv4_cidr_block Ec2SecondarySubnet#ipv4_cidr_block}.

---

##### `secondaryNetworkId`<sup>Required</sup> <a name="secondaryNetworkId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.secondaryNetworkId"></a>

```java
public java.lang.String getSecondaryNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#secondary_network_id Ec2SecondarySubnet#secondary_network_id}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#availability_zone Ec2SecondarySubnet#availability_zone}.

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#availability_zone_id Ec2SecondarySubnet#availability_zone_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#region Ec2SecondarySubnet#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#tags Ec2SecondarySubnet#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.timeouts"></a>

```java
public Ec2SecondarySubnetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#timeouts Ec2SecondarySubnet#timeouts}

---

### Ec2SecondarySubnetIpv4CidrBlockAssociations <a name="Ec2SecondarySubnetIpv4CidrBlockAssociations" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociations.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_secondary_subnet.Ec2SecondarySubnetIpv4CidrBlockAssociations;

Ec2SecondarySubnetIpv4CidrBlockAssociations.builder()
    .build();
```


### Ec2SecondarySubnetTimeouts <a name="Ec2SecondarySubnetTimeouts" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_secondary_subnet.Ec2SecondarySubnetTimeouts;

Ec2SecondarySubnetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#create Ec2SecondarySubnet#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#delete Ec2SecondarySubnet#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/ec2_secondary_subnet#update Ec2SecondarySubnet#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2SecondarySubnetIpv4CidrBlockAssociationsList <a name="Ec2SecondarySubnetIpv4CidrBlockAssociationsList" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_secondary_subnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList;

new Ec2SecondarySubnetIpv4CidrBlockAssociationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.get"></a>

```java
public Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference <a name="Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_secondary_subnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference;

new Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.associationId">associationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociations">Ec2SecondarySubnetIpv4CidrBlockAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.associationId"></a>

```java
public java.lang.String getAssociationId();
```

- *Type:* java.lang.String

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.internalValue"></a>

```java
public Ec2SecondarySubnetIpv4CidrBlockAssociations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociations">Ec2SecondarySubnetIpv4CidrBlockAssociations</a>

---


### Ec2SecondarySubnetTimeoutsOutputReference <a name="Ec2SecondarySubnetTimeoutsOutputReference" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_secondary_subnet.Ec2SecondarySubnetTimeoutsOutputReference;

new Ec2SecondarySubnetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2SecondarySubnetTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a>

---




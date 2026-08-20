# `vpcBlockPublicAccessExclusion` Submodule <a name="`vpcBlockPublicAccessExclusion` Submodule" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcBlockPublicAccessExclusion <a name="VpcBlockPublicAccessExclusion" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion aws_vpc_block_public_access_exclusion}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_block_public_access_exclusion.VpcBlockPublicAccessExclusion;

VpcBlockPublicAccessExclusion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .internetGatewayExclusionMode(java.lang.String)
//  .region(java.lang.String)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpcBlockPublicAccessExclusionTimeouts)
//  .vpcId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.internetGatewayExclusionMode">internetGatewayExclusionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#internet_gateway_exclusion_mode VpcBlockPublicAccessExclusion#internet_gateway_exclusion_mode}. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#subnet_id VpcBlockPublicAccessExclusion#subnet_id}. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#tags VpcBlockPublicAccessExclusion#tags}. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#vpc_id VpcBlockPublicAccessExclusion#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `internetGatewayExclusionMode`<sup>Required</sup> <a name="internetGatewayExclusionMode" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.internetGatewayExclusionMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#internet_gateway_exclusion_mode VpcBlockPublicAccessExclusion#internet_gateway_exclusion_mode}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#region VpcBlockPublicAccessExclusion#region}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#subnet_id VpcBlockPublicAccessExclusion#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#tags VpcBlockPublicAccessExclusion#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#timeouts VpcBlockPublicAccessExclusion#timeouts}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#vpc_id VpcBlockPublicAccessExclusion#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.putTimeouts"></a>

```java
public void putTimeouts(VpcBlockPublicAccessExclusionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetVpcId"></a>

```java
public void resetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpcBlockPublicAccessExclusion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isConstruct"></a>

```java
import io.cdktn.providers.aws.vpc_block_public_access_exclusion.VpcBlockPublicAccessExclusion;

VpcBlockPublicAccessExclusion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.vpc_block_public_access_exclusion.VpcBlockPublicAccessExclusion;

VpcBlockPublicAccessExclusion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.vpc_block_public_access_exclusion.VpcBlockPublicAccessExclusion;

VpcBlockPublicAccessExclusion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.vpc_block_public_access_exclusion.VpcBlockPublicAccessExclusion;

VpcBlockPublicAccessExclusion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpcBlockPublicAccessExclusion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VpcBlockPublicAccessExclusion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpcBlockPublicAccessExclusion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpcBlockPublicAccessExclusion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VpcBlockPublicAccessExclusion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference">VpcBlockPublicAccessExclusionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.internetGatewayExclusionModeInput">internetGatewayExclusionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.internetGatewayExclusionMode">internetGatewayExclusionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.timeouts"></a>

```java
public VpcBlockPublicAccessExclusionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference">VpcBlockPublicAccessExclusionTimeoutsOutputReference</a>

---

##### `internetGatewayExclusionModeInput`<sup>Optional</sup> <a name="internetGatewayExclusionModeInput" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.internetGatewayExclusionModeInput"></a>

```java
public java.lang.String getInternetGatewayExclusionModeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.timeoutsInput"></a>

```java
public IResolvable|VpcBlockPublicAccessExclusionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `internetGatewayExclusionMode`<sup>Required</sup> <a name="internetGatewayExclusionMode" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.internetGatewayExclusionMode"></a>

```java
public java.lang.String getInternetGatewayExclusionMode();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpcBlockPublicAccessExclusionConfig <a name="VpcBlockPublicAccessExclusionConfig" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_block_public_access_exclusion.VpcBlockPublicAccessExclusionConfig;

VpcBlockPublicAccessExclusionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .internetGatewayExclusionMode(java.lang.String)
//  .region(java.lang.String)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpcBlockPublicAccessExclusionTimeouts)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.internetGatewayExclusionMode">internetGatewayExclusionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#internet_gateway_exclusion_mode VpcBlockPublicAccessExclusion#internet_gateway_exclusion_mode}. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#subnet_id VpcBlockPublicAccessExclusion#subnet_id}. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#tags VpcBlockPublicAccessExclusion#tags}. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#vpc_id VpcBlockPublicAccessExclusion#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `internetGatewayExclusionMode`<sup>Required</sup> <a name="internetGatewayExclusionMode" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.internetGatewayExclusionMode"></a>

```java
public java.lang.String getInternetGatewayExclusionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#internet_gateway_exclusion_mode VpcBlockPublicAccessExclusion#internet_gateway_exclusion_mode}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#region VpcBlockPublicAccessExclusion#region}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#subnet_id VpcBlockPublicAccessExclusion#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#tags VpcBlockPublicAccessExclusion#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.timeouts"></a>

```java
public VpcBlockPublicAccessExclusionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#timeouts VpcBlockPublicAccessExclusion#timeouts}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#vpc_id VpcBlockPublicAccessExclusion#vpc_id}.

---

### VpcBlockPublicAccessExclusionTimeouts <a name="VpcBlockPublicAccessExclusionTimeouts" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_block_public_access_exclusion.VpcBlockPublicAccessExclusionTimeouts;

VpcBlockPublicAccessExclusionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#create VpcBlockPublicAccessExclusion#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#delete VpcBlockPublicAccessExclusion#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/vpc_block_public_access_exclusion#update VpcBlockPublicAccessExclusion#update}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcBlockPublicAccessExclusionTimeoutsOutputReference <a name="VpcBlockPublicAccessExclusionTimeoutsOutputReference" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_block_public_access_exclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference;

new VpcBlockPublicAccessExclusionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VpcBlockPublicAccessExclusionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a>

---




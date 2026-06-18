# `vpcSecurityGroupVpcAssociation` Submodule <a name="`vpcSecurityGroupVpcAssociation` Submodule" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSecurityGroupVpcAssociation <a name="VpcSecurityGroupVpcAssociation" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association aws_vpc_security_group_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_security_group_vpc_association.VpcSecurityGroupVpcAssociation;

VpcSecurityGroupVpcAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .securityGroupId(java.lang.String)
    .vpcId(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VpcSecurityGroupVpcAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#security_group_id VpcSecurityGroupVpcAssociation#security_group_id}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#vpc_id VpcSecurityGroupVpcAssociation#vpc_id}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts">VpcSecurityGroupVpcAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.securityGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#security_group_id VpcSecurityGroupVpcAssociation#security_group_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#vpc_id VpcSecurityGroupVpcAssociation#vpc_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#region VpcSecurityGroupVpcAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts">VpcSecurityGroupVpcAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#timeouts VpcSecurityGroupVpcAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.putTimeouts"></a>

```java
public void putTimeouts(VpcSecurityGroupVpcAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts">VpcSecurityGroupVpcAssociationTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpcSecurityGroupVpcAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isConstruct"></a>

```java
import io.cdktn.providers.aws.vpc_security_group_vpc_association.VpcSecurityGroupVpcAssociation;

VpcSecurityGroupVpcAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.vpc_security_group_vpc_association.VpcSecurityGroupVpcAssociation;

VpcSecurityGroupVpcAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.vpc_security_group_vpc_association.VpcSecurityGroupVpcAssociation;

VpcSecurityGroupVpcAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.vpc_security_group_vpc_association.VpcSecurityGroupVpcAssociation;

VpcSecurityGroupVpcAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpcSecurityGroupVpcAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VpcSecurityGroupVpcAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpcSecurityGroupVpcAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpcSecurityGroupVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VpcSecurityGroupVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference">VpcSecurityGroupVpcAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts">VpcSecurityGroupVpcAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.timeouts"></a>

```java
public VpcSecurityGroupVpcAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference">VpcSecurityGroupVpcAssociationTimeoutsOutputReference</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.timeoutsInput"></a>

```java
public IResolvable|VpcSecurityGroupVpcAssociationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts">VpcSecurityGroupVpcAssociationTimeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSecurityGroupVpcAssociationConfig <a name="VpcSecurityGroupVpcAssociationConfig" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_security_group_vpc_association.VpcSecurityGroupVpcAssociationConfig;

VpcSecurityGroupVpcAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .securityGroupId(java.lang.String)
    .vpcId(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VpcSecurityGroupVpcAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#security_group_id VpcSecurityGroupVpcAssociation#security_group_id}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#vpc_id VpcSecurityGroupVpcAssociation#vpc_id}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts">VpcSecurityGroupVpcAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#security_group_id VpcSecurityGroupVpcAssociation#security_group_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#vpc_id VpcSecurityGroupVpcAssociation#vpc_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#region VpcSecurityGroupVpcAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.timeouts"></a>

```java
public VpcSecurityGroupVpcAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts">VpcSecurityGroupVpcAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#timeouts VpcSecurityGroupVpcAssociation#timeouts}

---

### VpcSecurityGroupVpcAssociationTimeouts <a name="VpcSecurityGroupVpcAssociationTimeouts" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_security_group_vpc_association.VpcSecurityGroupVpcAssociationTimeouts;

VpcSecurityGroupVpcAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#create VpcSecurityGroupVpcAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_security_group_vpc_association#delete VpcSecurityGroupVpcAssociation#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcSecurityGroupVpcAssociationTimeoutsOutputReference <a name="VpcSecurityGroupVpcAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_security_group_vpc_association.VpcSecurityGroupVpcAssociationTimeoutsOutputReference;

new VpcSecurityGroupVpcAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts">VpcSecurityGroupVpcAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VpcSecurityGroupVpcAssociationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts">VpcSecurityGroupVpcAssociationTimeouts</a>

---




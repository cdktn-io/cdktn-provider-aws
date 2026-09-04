# `datazonePolicyGrant` Submodule <a name="`datazonePolicyGrant` Submodule" id="@cdktn/provider-aws.datazonePolicyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazonePolicyGrant <a name="DatazonePolicyGrant" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant aws_datazone_policy_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrant;

DatazonePolicyGrant.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainIdentifier(java.lang.String)
    .entityIdentifier(java.lang.String)
    .entityType(java.lang.String)
    .policyType(java.lang.String)
//  .detail(IResolvable|java.util.List<DatazonePolicyGrantDetail>)
//  .principal(IResolvable|java.util.List<DatazonePolicyGrantPrincipal>)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_identifier DatazonePolicyGrant#domain_identifier}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.entityIdentifier">entityIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_identifier DatazonePolicyGrant#entity_identifier}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_type DatazonePolicyGrant#entity_type}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.policyType">policyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#policy_type DatazonePolicyGrant#policy_type}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.detail">detail</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>></code> | detail block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.principal">principal</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>></code> | principal block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.domainIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_identifier DatazonePolicyGrant#domain_identifier}.

---

##### `entityIdentifier`<sup>Required</sup> <a name="entityIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.entityIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_identifier DatazonePolicyGrant#entity_identifier}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.entityType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_type DatazonePolicyGrant#entity_type}.

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.policyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#policy_type DatazonePolicyGrant#policy_type}.

---

##### `detail`<sup>Optional</sup> <a name="detail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.detail"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>>

detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#detail DatazonePolicyGrant#detail}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.principal"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>>

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#principal DatazonePolicyGrant#principal}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#region DatazonePolicyGrant#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putDetail">putDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetDetail">resetDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetail` <a name="putDetail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putDetail"></a>

```java
public void putDetail(IResolvable|java.util.List<DatazonePolicyGrantDetail> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putDetail.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>>

---

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal"></a>

```java
public void putPrincipal(IResolvable|java.util.List<DatazonePolicyGrantPrincipal> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>>

---

##### `resetDetail` <a name="resetDetail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetDetail"></a>

```java
public void resetDetail()
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetPrincipal"></a>

```java
public void resetPrincipal()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazonePolicyGrant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isConstruct"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrant;

DatazonePolicyGrant.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrant;

DatazonePolicyGrant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrant;

DatazonePolicyGrant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrant;

DatazonePolicyGrant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatazonePolicyGrant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatazonePolicyGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatazonePolicyGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatazonePolicyGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatazonePolicyGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.detail">detail</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList">DatazonePolicyGrantDetailList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.grantId">grantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList">DatazonePolicyGrantPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.detailInput">detailInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifierInput">entityIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityTypeInput">entityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.principalInput">principalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifier">entityIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.detail"></a>

```java
public DatazonePolicyGrantDetailList getDetail();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList">DatazonePolicyGrantDetailList</a>

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.grantId"></a>

```java
public java.lang.String getGrantId();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.principal"></a>

```java
public DatazonePolicyGrantPrincipalList getPrincipal();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList">DatazonePolicyGrantPrincipalList</a>

---

##### `detailInput`<sup>Optional</sup> <a name="detailInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.detailInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetail> getDetailInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>>

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifierInput"></a>

```java
public java.lang.String getDomainIdentifierInput();
```

- *Type:* java.lang.String

---

##### `entityIdentifierInput`<sup>Optional</sup> <a name="entityIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifierInput"></a>

```java
public java.lang.String getEntityIdentifierInput();
```

- *Type:* java.lang.String

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityTypeInput"></a>

```java
public java.lang.String getEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.principalInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipal> getPrincipalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

---

##### `entityIdentifier`<sup>Required</sup> <a name="entityIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifier"></a>

```java
public java.lang.String getEntityIdentifier();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatazonePolicyGrantConfig <a name="DatazonePolicyGrantConfig" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantConfig;

DatazonePolicyGrantConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainIdentifier(java.lang.String)
    .entityIdentifier(java.lang.String)
    .entityType(java.lang.String)
    .policyType(java.lang.String)
//  .detail(IResolvable|java.util.List<DatazonePolicyGrantDetail>)
//  .principal(IResolvable|java.util.List<DatazonePolicyGrantPrincipal>)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_identifier DatazonePolicyGrant#domain_identifier}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityIdentifier">entityIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_identifier DatazonePolicyGrant#entity_identifier}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_type DatazonePolicyGrant#entity_type}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.policyType">policyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#policy_type DatazonePolicyGrant#policy_type}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.detail">detail</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>></code> | detail block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.principal">principal</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>></code> | principal block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_identifier DatazonePolicyGrant#domain_identifier}.

---

##### `entityIdentifier`<sup>Required</sup> <a name="entityIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityIdentifier"></a>

```java
public java.lang.String getEntityIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_identifier DatazonePolicyGrant#entity_identifier}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_type DatazonePolicyGrant#entity_type}.

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#policy_type DatazonePolicyGrant#policy_type}.

---

##### `detail`<sup>Optional</sup> <a name="detail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.detail"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetail> getDetail();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>>

detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#detail DatazonePolicyGrant#detail}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.principal"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipal> getPrincipal();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>>

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#principal DatazonePolicyGrant#principal}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#region DatazonePolicyGrant#region}

---

### DatazonePolicyGrantDetail <a name="DatazonePolicyGrantDetail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetail;

DatazonePolicyGrantDetail.builder()
//  .addToProjectMemberPool(IResolvable|java.util.List<DatazonePolicyGrantDetailAddToProjectMemberPool>)
//  .createAssetType(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateAssetType>)
//  .createDomainUnit(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateDomainUnit>)
//  .createEnvironment(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironment>)
//  .createEnvironmentFromBlueprint(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint>)
//  .createEnvironmentProfile(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironmentProfile>)
//  .createFormType(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateFormType>)
//  .createGlossary(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateGlossary>)
//  .createProject(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateProject>)
//  .createProjectFromProjectProfile(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateProjectFromProjectProfile>)
//  .delegateCreateEnvironmentProfile(IResolvable|java.util.List<DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile>)
//  .overrideDomainUnitOwners(IResolvable|java.util.List<DatazonePolicyGrantDetailOverrideDomainUnitOwners>)
//  .overrideProjectOwners(IResolvable|java.util.List<DatazonePolicyGrantDetailOverrideProjectOwners>)
//  .useAssetType(IResolvable|java.util.List<DatazonePolicyGrantDetailUseAssetType>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.addToProjectMemberPool">addToProjectMemberPool</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>></code> | add_to_project_member_pool block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createAssetType">createAssetType</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>></code> | create_asset_type block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createDomainUnit">createDomainUnit</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>></code> | create_domain_unit block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironment">createEnvironment</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>></code> | create_environment block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentFromBlueprint">createEnvironmentFromBlueprint</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>></code> | create_environment_from_blueprint block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentProfile">createEnvironmentProfile</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>></code> | create_environment_profile block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createFormType">createFormType</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>></code> | create_form_type block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createGlossary">createGlossary</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>></code> | create_glossary block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProject">createProject</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>></code> | create_project block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProjectFromProjectProfile">createProjectFromProjectProfile</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>></code> | create_project_from_project_profile block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.delegateCreateEnvironmentProfile">delegateCreateEnvironmentProfile</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>></code> | delegate_create_environment_profile block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideDomainUnitOwners">overrideDomainUnitOwners</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>></code> | override_domain_unit_owners block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideProjectOwners">overrideProjectOwners</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>></code> | override_project_owners block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.useAssetType">useAssetType</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>></code> | use_asset_type block. |

---

##### `addToProjectMemberPool`<sup>Optional</sup> <a name="addToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.addToProjectMemberPool"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailAddToProjectMemberPool> getAddToProjectMemberPool();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>>

add_to_project_member_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#add_to_project_member_pool DatazonePolicyGrant#add_to_project_member_pool}

---

##### `createAssetType`<sup>Optional</sup> <a name="createAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createAssetType"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateAssetType> getCreateAssetType();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>>

create_asset_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_asset_type DatazonePolicyGrant#create_asset_type}

---

##### `createDomainUnit`<sup>Optional</sup> <a name="createDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createDomainUnit"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateDomainUnit> getCreateDomainUnit();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>>

create_domain_unit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_domain_unit DatazonePolicyGrant#create_domain_unit}

---

##### `createEnvironment`<sup>Optional</sup> <a name="createEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironment"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironment> getCreateEnvironment();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>>

create_environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_environment DatazonePolicyGrant#create_environment}

---

##### `createEnvironmentFromBlueprint`<sup>Optional</sup> <a name="createEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentFromBlueprint"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint> getCreateEnvironmentFromBlueprint();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>>

create_environment_from_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_environment_from_blueprint DatazonePolicyGrant#create_environment_from_blueprint}

---

##### `createEnvironmentProfile`<sup>Optional</sup> <a name="createEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentProfile"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironmentProfile> getCreateEnvironmentProfile();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>>

create_environment_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_environment_profile DatazonePolicyGrant#create_environment_profile}

---

##### `createFormType`<sup>Optional</sup> <a name="createFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createFormType"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateFormType> getCreateFormType();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>>

create_form_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_form_type DatazonePolicyGrant#create_form_type}

---

##### `createGlossary`<sup>Optional</sup> <a name="createGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createGlossary"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateGlossary> getCreateGlossary();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>>

create_glossary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_glossary DatazonePolicyGrant#create_glossary}

---

##### `createProject`<sup>Optional</sup> <a name="createProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProject"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateProject> getCreateProject();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>>

create_project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_project DatazonePolicyGrant#create_project}

---

##### `createProjectFromProjectProfile`<sup>Optional</sup> <a name="createProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProjectFromProjectProfile"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateProjectFromProjectProfile> getCreateProjectFromProjectProfile();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>>

create_project_from_project_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_project_from_project_profile DatazonePolicyGrant#create_project_from_project_profile}

---

##### `delegateCreateEnvironmentProfile`<sup>Optional</sup> <a name="delegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.delegateCreateEnvironmentProfile"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile> getDelegateCreateEnvironmentProfile();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>>

delegate_create_environment_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#delegate_create_environment_profile DatazonePolicyGrant#delegate_create_environment_profile}

---

##### `overrideDomainUnitOwners`<sup>Optional</sup> <a name="overrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideDomainUnitOwners"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailOverrideDomainUnitOwners> getOverrideDomainUnitOwners();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>>

override_domain_unit_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#override_domain_unit_owners DatazonePolicyGrant#override_domain_unit_owners}

---

##### `overrideProjectOwners`<sup>Optional</sup> <a name="overrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideProjectOwners"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailOverrideProjectOwners> getOverrideProjectOwners();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>>

override_project_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#override_project_owners DatazonePolicyGrant#override_project_owners}

---

##### `useAssetType`<sup>Optional</sup> <a name="useAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.useAssetType"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailUseAssetType> getUseAssetType();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>>

use_asset_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#use_asset_type DatazonePolicyGrant#use_asset_type}

---

### DatazonePolicyGrantDetailAddToProjectMemberPool <a name="DatazonePolicyGrantDetailAddToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailAddToProjectMemberPool;

DatazonePolicyGrantDetailAddToProjectMemberPool.builder()
//  .includeChildDomainUnits(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateAssetType <a name="DatazonePolicyGrantDetailCreateAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateAssetType;

DatazonePolicyGrantDetailCreateAssetType.builder()
//  .includeChildDomainUnits(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateDomainUnit <a name="DatazonePolicyGrantDetailCreateDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateDomainUnit;

DatazonePolicyGrantDetailCreateDomainUnit.builder()
//  .includeChildDomainUnits(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateEnvironment <a name="DatazonePolicyGrantDetailCreateEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateEnvironment;

DatazonePolicyGrantDetailCreateEnvironment.builder()
    .build();
```


### DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint <a name="DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint;

DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint.builder()
    .build();
```


### DatazonePolicyGrantDetailCreateEnvironmentProfile <a name="DatazonePolicyGrantDetailCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateEnvironmentProfile;

DatazonePolicyGrantDetailCreateEnvironmentProfile.builder()
//  .domainUnitId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.property.domainUnitId">domainUnitId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}. |

---

##### `domainUnitId`<sup>Optional</sup> <a name="domainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.property.domainUnitId"></a>

```java
public java.lang.String getDomainUnitId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}.

---

### DatazonePolicyGrantDetailCreateFormType <a name="DatazonePolicyGrantDetailCreateFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateFormType;

DatazonePolicyGrantDetailCreateFormType.builder()
//  .includeChildDomainUnits(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateGlossary <a name="DatazonePolicyGrantDetailCreateGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateGlossary;

DatazonePolicyGrantDetailCreateGlossary.builder()
//  .includeChildDomainUnits(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateProject <a name="DatazonePolicyGrantDetailCreateProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateProject;

DatazonePolicyGrantDetailCreateProject.builder()
//  .includeChildDomainUnits(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateProjectFromProjectProfile <a name="DatazonePolicyGrantDetailCreateProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile;

DatazonePolicyGrantDetailCreateProjectFromProjectProfile.builder()
//  .includeChildDomainUnits(java.lang.Boolean|IResolvable)
//  .projectProfiles(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.projectProfiles">projectProfiles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_profiles DatazonePolicyGrant#project_profiles}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

##### `projectProfiles`<sup>Optional</sup> <a name="projectProfiles" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.projectProfiles"></a>

```java
public java.util.List<java.lang.String> getProjectProfiles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_profiles DatazonePolicyGrant#project_profiles}.

---

### DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile <a name="DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile;

DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile.builder()
    .build();
```


### DatazonePolicyGrantDetailOverrideDomainUnitOwners <a name="DatazonePolicyGrantDetailOverrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailOverrideDomainUnitOwners;

DatazonePolicyGrantDetailOverrideDomainUnitOwners.builder()
//  .includeChildDomainUnits(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailOverrideProjectOwners <a name="DatazonePolicyGrantDetailOverrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailOverrideProjectOwners;

DatazonePolicyGrantDetailOverrideProjectOwners.builder()
//  .includeChildDomainUnits(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailUseAssetType <a name="DatazonePolicyGrantDetailUseAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailUseAssetType;

DatazonePolicyGrantDetailUseAssetType.builder()
//  .domainUnitId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType.property.domainUnitId">domainUnitId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}. |

---

##### `domainUnitId`<sup>Optional</sup> <a name="domainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType.property.domainUnitId"></a>

```java
public java.lang.String getDomainUnitId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}.

---

### DatazonePolicyGrantPrincipal <a name="DatazonePolicyGrantPrincipal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipal;

DatazonePolicyGrantPrincipal.builder()
//  .domainUnit(IResolvable|java.util.List<DatazonePolicyGrantPrincipalDomainUnit>)
//  .group(IResolvable|java.util.List<DatazonePolicyGrantPrincipalGroup>)
//  .project(IResolvable|java.util.List<DatazonePolicyGrantPrincipalProject>)
//  .user(IResolvable|java.util.List<DatazonePolicyGrantPrincipalUser>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.domainUnit">domainUnit</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>></code> | domain_unit block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.group">group</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>></code> | group block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.project">project</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>></code> | project block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.user">user</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>></code> | user block. |

---

##### `domainUnit`<sup>Optional</sup> <a name="domainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.domainUnit"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalDomainUnit> getDomainUnit();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>>

domain_unit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.group"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalGroup> getGroup();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>>

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#group DatazonePolicyGrant#group}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.project"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalProject> getProject();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>>

project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project DatazonePolicyGrant#project}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.user"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalUser> getUser();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#user DatazonePolicyGrant#user}

---

### DatazonePolicyGrantPrincipalDomainUnit <a name="DatazonePolicyGrantPrincipalDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalDomainUnit;

DatazonePolicyGrantPrincipalDomainUnit.builder()
    .domainUnitDesignation(java.lang.String)
//  .allDomainUnitsGrantFilter(IResolvable|java.util.List<DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter>)
//  .domainUnitIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitDesignation">domainUnitDesignation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_designation DatazonePolicyGrant#domain_unit_designation}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.allDomainUnitsGrantFilter">allDomainUnitsGrantFilter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>></code> | all_domain_units_grant_filter block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitIdentifier">domainUnitIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_identifier DatazonePolicyGrant#domain_unit_identifier}. |

---

##### `domainUnitDesignation`<sup>Required</sup> <a name="domainUnitDesignation" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitDesignation"></a>

```java
public java.lang.String getDomainUnitDesignation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_designation DatazonePolicyGrant#domain_unit_designation}.

---

##### `allDomainUnitsGrantFilter`<sup>Optional</sup> <a name="allDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.allDomainUnitsGrantFilter"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter> getAllDomainUnitsGrantFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>>

all_domain_units_grant_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#all_domain_units_grant_filter DatazonePolicyGrant#all_domain_units_grant_filter}

---

##### `domainUnitIdentifier`<sup>Optional</sup> <a name="domainUnitIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitIdentifier"></a>

```java
public java.lang.String getDomainUnitIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_identifier DatazonePolicyGrant#domain_unit_identifier}.

---

### DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter <a name="DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter;

DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter.builder()
    .build();
```


### DatazonePolicyGrantPrincipalGroup <a name="DatazonePolicyGrantPrincipalGroup" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalGroup;

DatazonePolicyGrantPrincipalGroup.builder()
    .groupIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.property.groupIdentifier">groupIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#group_identifier DatazonePolicyGrant#group_identifier}. |

---

##### `groupIdentifier`<sup>Required</sup> <a name="groupIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.property.groupIdentifier"></a>

```java
public java.lang.String getGroupIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#group_identifier DatazonePolicyGrant#group_identifier}.

---

### DatazonePolicyGrantPrincipalProject <a name="DatazonePolicyGrantPrincipalProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalProject;

DatazonePolicyGrantPrincipalProject.builder()
    .projectDesignation(java.lang.String)
//  .domainUnitFilter(IResolvable|java.util.List<DatazonePolicyGrantPrincipalProjectDomainUnitFilter>)
//  .projectIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectDesignation">projectDesignation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_designation DatazonePolicyGrant#project_designation}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.domainUnitFilter">domainUnitFilter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>></code> | domain_unit_filter block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectIdentifier">projectIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_identifier DatazonePolicyGrant#project_identifier}. |

---

##### `projectDesignation`<sup>Required</sup> <a name="projectDesignation" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectDesignation"></a>

```java
public java.lang.String getProjectDesignation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_designation DatazonePolicyGrant#project_designation}.

---

##### `domainUnitFilter`<sup>Optional</sup> <a name="domainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.domainUnitFilter"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalProjectDomainUnitFilter> getDomainUnitFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>>

domain_unit_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_filter DatazonePolicyGrant#domain_unit_filter}

---

##### `projectIdentifier`<sup>Optional</sup> <a name="projectIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectIdentifier"></a>

```java
public java.lang.String getProjectIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_identifier DatazonePolicyGrant#project_identifier}.

---

### DatazonePolicyGrantPrincipalProjectDomainUnitFilter <a name="DatazonePolicyGrantPrincipalProjectDomainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter;

DatazonePolicyGrantPrincipalProjectDomainUnitFilter.builder()
    .domainUnit(java.lang.String)
//  .includeChildDomainUnits(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.property.domainUnit">domainUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `domainUnit`<sup>Required</sup> <a name="domainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.property.domainUnit"></a>

```java
public java.lang.String getDomainUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}.

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantPrincipalUser <a name="DatazonePolicyGrantPrincipalUser" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalUser;

DatazonePolicyGrantPrincipalUser.builder()
//  .allUsersGrantFilter(IResolvable|java.util.List<DatazonePolicyGrantPrincipalUserAllUsersGrantFilter>)
//  .userIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.allUsersGrantFilter">allUsersGrantFilter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>></code> | all_users_grant_filter block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.userIdentifier">userIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#user_identifier DatazonePolicyGrant#user_identifier}. |

---

##### `allUsersGrantFilter`<sup>Optional</sup> <a name="allUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.allUsersGrantFilter"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalUserAllUsersGrantFilter> getAllUsersGrantFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>>

all_users_grant_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#all_users_grant_filter DatazonePolicyGrant#all_users_grant_filter}

---

##### `userIdentifier`<sup>Optional</sup> <a name="userIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.userIdentifier"></a>

```java
public java.lang.String getUserIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#user_identifier DatazonePolicyGrant#user_identifier}.

---

### DatazonePolicyGrantPrincipalUserAllUsersGrantFilter <a name="DatazonePolicyGrantPrincipalUserAllUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter;

DatazonePolicyGrantPrincipalUserAllUsersGrantFilter.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DatazonePolicyGrantDetailAddToProjectMemberPoolList <a name="DatazonePolicyGrantDetailAddToProjectMemberPoolList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailAddToProjectMemberPoolList;

new DatazonePolicyGrantDetailAddToProjectMemberPoolList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.get"></a>

```java
public DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailAddToProjectMemberPool> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>>

---


### DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference <a name="DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference;

new DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resetIncludeChildDomainUnits"></a>

```java
public void resetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnitsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnitsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetailAddToProjectMemberPool getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>

---


### DatazonePolicyGrantDetailCreateAssetTypeList <a name="DatazonePolicyGrantDetailCreateAssetTypeList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateAssetTypeList;

new DatazonePolicyGrantDetailCreateAssetTypeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.get"></a>

```java
public DatazonePolicyGrantDetailCreateAssetTypeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateAssetType> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>>

---


### DatazonePolicyGrantDetailCreateAssetTypeOutputReference <a name="DatazonePolicyGrantDetailCreateAssetTypeOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference;

new DatazonePolicyGrantDetailCreateAssetTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resetIncludeChildDomainUnits"></a>

```java
public void resetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnitsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnitsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetailCreateAssetType getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>

---


### DatazonePolicyGrantDetailCreateDomainUnitList <a name="DatazonePolicyGrantDetailCreateDomainUnitList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateDomainUnitList;

new DatazonePolicyGrantDetailCreateDomainUnitList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.get"></a>

```java
public DatazonePolicyGrantDetailCreateDomainUnitOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateDomainUnit> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>>

---


### DatazonePolicyGrantDetailCreateDomainUnitOutputReference <a name="DatazonePolicyGrantDetailCreateDomainUnitOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference;

new DatazonePolicyGrantDetailCreateDomainUnitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resetIncludeChildDomainUnits"></a>

```java
public void resetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnitsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnitsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetailCreateDomainUnit getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>

---


### DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList <a name="DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList;

new DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.get"></a>

```java
public DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>>

---


### DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference <a name="DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference;

new DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>

---


### DatazonePolicyGrantDetailCreateEnvironmentList <a name="DatazonePolicyGrantDetailCreateEnvironmentList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateEnvironmentList;

new DatazonePolicyGrantDetailCreateEnvironmentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.get"></a>

```java
public DatazonePolicyGrantDetailCreateEnvironmentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironment> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>>

---


### DatazonePolicyGrantDetailCreateEnvironmentOutputReference <a name="DatazonePolicyGrantDetailCreateEnvironmentOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference;

new DatazonePolicyGrantDetailCreateEnvironmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetailCreateEnvironment getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>

---


### DatazonePolicyGrantDetailCreateEnvironmentProfileList <a name="DatazonePolicyGrantDetailCreateEnvironmentProfileList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateEnvironmentProfileList;

new DatazonePolicyGrantDetailCreateEnvironmentProfileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.get"></a>

```java
public DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironmentProfile> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>>

---


### DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference <a name="DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference;

new DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resetDomainUnitId">resetDomainUnitId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainUnitId` <a name="resetDomainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resetDomainUnitId"></a>

```java
public void resetDomainUnitId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitIdInput">domainUnitIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitId">domainUnitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainUnitIdInput`<sup>Optional</sup> <a name="domainUnitIdInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitIdInput"></a>

```java
public java.lang.String getDomainUnitIdInput();
```

- *Type:* java.lang.String

---

##### `domainUnitId`<sup>Required</sup> <a name="domainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitId"></a>

```java
public java.lang.String getDomainUnitId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetailCreateEnvironmentProfile getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>

---


### DatazonePolicyGrantDetailCreateFormTypeList <a name="DatazonePolicyGrantDetailCreateFormTypeList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateFormTypeList;

new DatazonePolicyGrantDetailCreateFormTypeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.get"></a>

```java
public DatazonePolicyGrantDetailCreateFormTypeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateFormType> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>>

---


### DatazonePolicyGrantDetailCreateFormTypeOutputReference <a name="DatazonePolicyGrantDetailCreateFormTypeOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateFormTypeOutputReference;

new DatazonePolicyGrantDetailCreateFormTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resetIncludeChildDomainUnits"></a>

```java
public void resetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnitsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnitsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetailCreateFormType getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>

---


### DatazonePolicyGrantDetailCreateGlossaryList <a name="DatazonePolicyGrantDetailCreateGlossaryList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateGlossaryList;

new DatazonePolicyGrantDetailCreateGlossaryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.get"></a>

```java
public DatazonePolicyGrantDetailCreateGlossaryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateGlossary> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>>

---


### DatazonePolicyGrantDetailCreateGlossaryOutputReference <a name="DatazonePolicyGrantDetailCreateGlossaryOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateGlossaryOutputReference;

new DatazonePolicyGrantDetailCreateGlossaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resetIncludeChildDomainUnits"></a>

```java
public void resetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnitsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnitsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetailCreateGlossary getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>

---


### DatazonePolicyGrantDetailCreateProjectFromProjectProfileList <a name="DatazonePolicyGrantDetailCreateProjectFromProjectProfileList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList;

new DatazonePolicyGrantDetailCreateProjectFromProjectProfileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.get"></a>

```java
public DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateProjectFromProjectProfile> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>>

---


### DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference <a name="DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference;

new DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetProjectProfiles">resetProjectProfiles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetIncludeChildDomainUnits"></a>

```java
public void resetIncludeChildDomainUnits()
```

##### `resetProjectProfiles` <a name="resetProjectProfiles" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetProjectProfiles"></a>

```java
public void resetProjectProfiles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfilesInput">projectProfilesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfiles">projectProfiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnitsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnitsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectProfilesInput`<sup>Optional</sup> <a name="projectProfilesInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfilesInput"></a>

```java
public java.util.List<java.lang.String> getProjectProfilesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectProfiles`<sup>Required</sup> <a name="projectProfiles" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfiles"></a>

```java
public java.util.List<java.lang.String> getProjectProfiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetailCreateProjectFromProjectProfile getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>

---


### DatazonePolicyGrantDetailCreateProjectList <a name="DatazonePolicyGrantDetailCreateProjectList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateProjectList;

new DatazonePolicyGrantDetailCreateProjectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.get"></a>

```java
public DatazonePolicyGrantDetailCreateProjectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateProject> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>>

---


### DatazonePolicyGrantDetailCreateProjectOutputReference <a name="DatazonePolicyGrantDetailCreateProjectOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailCreateProjectOutputReference;

new DatazonePolicyGrantDetailCreateProjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resetIncludeChildDomainUnits"></a>

```java
public void resetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnitsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnitsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetailCreateProject getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>

---


### DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList <a name="DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList;

new DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.get"></a>

```java
public DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>>

---


### DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference <a name="DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference;

new DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>

---


### DatazonePolicyGrantDetailList <a name="DatazonePolicyGrantDetailList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailList;

new DatazonePolicyGrantDetailList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.get"></a>

```java
public DatazonePolicyGrantDetailOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetail> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>>

---


### DatazonePolicyGrantDetailOutputReference <a name="DatazonePolicyGrantDetailOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailOutputReference;

new DatazonePolicyGrantDetailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool">putAddToProjectMemberPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType">putCreateAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit">putCreateDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironment">putCreateEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentFromBlueprint">putCreateEnvironmentFromBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile">putCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType">putCreateFormType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary">putCreateGlossary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject">putCreateProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile">putCreateProjectFromProjectProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putDelegateCreateEnvironmentProfile">putDelegateCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners">putOverrideDomainUnitOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners">putOverrideProjectOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putUseAssetType">putUseAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetAddToProjectMemberPool">resetAddToProjectMemberPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateAssetType">resetCreateAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateDomainUnit">resetCreateDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironment">resetCreateEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentFromBlueprint">resetCreateEnvironmentFromBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentProfile">resetCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateFormType">resetCreateFormType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateGlossary">resetCreateGlossary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProject">resetCreateProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProjectFromProjectProfile">resetCreateProjectFromProjectProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetDelegateCreateEnvironmentProfile">resetDelegateCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideDomainUnitOwners">resetOverrideDomainUnitOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideProjectOwners">resetOverrideProjectOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetUseAssetType">resetUseAssetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddToProjectMemberPool` <a name="putAddToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool"></a>

```java
public void putAddToProjectMemberPool(IResolvable|java.util.List<DatazonePolicyGrantDetailAddToProjectMemberPool> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>>

---

##### `putCreateAssetType` <a name="putCreateAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType"></a>

```java
public void putCreateAssetType(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateAssetType> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>>

---

##### `putCreateDomainUnit` <a name="putCreateDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit"></a>

```java
public void putCreateDomainUnit(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateDomainUnit> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>>

---

##### `putCreateEnvironment` <a name="putCreateEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironment"></a>

```java
public void putCreateEnvironment(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironment> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironment.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>>

---

##### `putCreateEnvironmentFromBlueprint` <a name="putCreateEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentFromBlueprint"></a>

```java
public void putCreateEnvironmentFromBlueprint(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentFromBlueprint.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>>

---

##### `putCreateEnvironmentProfile` <a name="putCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile"></a>

```java
public void putCreateEnvironmentProfile(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironmentProfile> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>>

---

##### `putCreateFormType` <a name="putCreateFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType"></a>

```java
public void putCreateFormType(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateFormType> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>>

---

##### `putCreateGlossary` <a name="putCreateGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary"></a>

```java
public void putCreateGlossary(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateGlossary> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>>

---

##### `putCreateProject` <a name="putCreateProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject"></a>

```java
public void putCreateProject(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateProject> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>>

---

##### `putCreateProjectFromProjectProfile` <a name="putCreateProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile"></a>

```java
public void putCreateProjectFromProjectProfile(IResolvable|java.util.List<DatazonePolicyGrantDetailCreateProjectFromProjectProfile> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>>

---

##### `putDelegateCreateEnvironmentProfile` <a name="putDelegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putDelegateCreateEnvironmentProfile"></a>

```java
public void putDelegateCreateEnvironmentProfile(IResolvable|java.util.List<DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putDelegateCreateEnvironmentProfile.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>>

---

##### `putOverrideDomainUnitOwners` <a name="putOverrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners"></a>

```java
public void putOverrideDomainUnitOwners(IResolvable|java.util.List<DatazonePolicyGrantDetailOverrideDomainUnitOwners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>>

---

##### `putOverrideProjectOwners` <a name="putOverrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners"></a>

```java
public void putOverrideProjectOwners(IResolvable|java.util.List<DatazonePolicyGrantDetailOverrideProjectOwners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>>

---

##### `putUseAssetType` <a name="putUseAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putUseAssetType"></a>

```java
public void putUseAssetType(IResolvable|java.util.List<DatazonePolicyGrantDetailUseAssetType> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putUseAssetType.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>>

---

##### `resetAddToProjectMemberPool` <a name="resetAddToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetAddToProjectMemberPool"></a>

```java
public void resetAddToProjectMemberPool()
```

##### `resetCreateAssetType` <a name="resetCreateAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateAssetType"></a>

```java
public void resetCreateAssetType()
```

##### `resetCreateDomainUnit` <a name="resetCreateDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateDomainUnit"></a>

```java
public void resetCreateDomainUnit()
```

##### `resetCreateEnvironment` <a name="resetCreateEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironment"></a>

```java
public void resetCreateEnvironment()
```

##### `resetCreateEnvironmentFromBlueprint` <a name="resetCreateEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentFromBlueprint"></a>

```java
public void resetCreateEnvironmentFromBlueprint()
```

##### `resetCreateEnvironmentProfile` <a name="resetCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentProfile"></a>

```java
public void resetCreateEnvironmentProfile()
```

##### `resetCreateFormType` <a name="resetCreateFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateFormType"></a>

```java
public void resetCreateFormType()
```

##### `resetCreateGlossary` <a name="resetCreateGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateGlossary"></a>

```java
public void resetCreateGlossary()
```

##### `resetCreateProject` <a name="resetCreateProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProject"></a>

```java
public void resetCreateProject()
```

##### `resetCreateProjectFromProjectProfile` <a name="resetCreateProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProjectFromProjectProfile"></a>

```java
public void resetCreateProjectFromProjectProfile()
```

##### `resetDelegateCreateEnvironmentProfile` <a name="resetDelegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetDelegateCreateEnvironmentProfile"></a>

```java
public void resetDelegateCreateEnvironmentProfile()
```

##### `resetOverrideDomainUnitOwners` <a name="resetOverrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideDomainUnitOwners"></a>

```java
public void resetOverrideDomainUnitOwners()
```

##### `resetOverrideProjectOwners` <a name="resetOverrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideProjectOwners"></a>

```java
public void resetOverrideProjectOwners()
```

##### `resetUseAssetType` <a name="resetUseAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetUseAssetType"></a>

```java
public void resetUseAssetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPool">addToProjectMemberPool</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList">DatazonePolicyGrantDetailAddToProjectMemberPoolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetType">createAssetType</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList">DatazonePolicyGrantDetailCreateAssetTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnit">createDomainUnit</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList">DatazonePolicyGrantDetailCreateDomainUnitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironment">createEnvironment</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList">DatazonePolicyGrantDetailCreateEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprint">createEnvironmentFromBlueprint</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfile">createEnvironmentProfile</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList">DatazonePolicyGrantDetailCreateEnvironmentProfileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormType">createFormType</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList">DatazonePolicyGrantDetailCreateFormTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossary">createGlossary</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList">DatazonePolicyGrantDetailCreateGlossaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProject">createProject</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList">DatazonePolicyGrantDetailCreateProjectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfile">createProjectFromProjectProfile</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList">DatazonePolicyGrantDetailCreateProjectFromProjectProfileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfile">delegateCreateEnvironmentProfile</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwners">overrideDomainUnitOwners</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList">DatazonePolicyGrantDetailOverrideDomainUnitOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwners">overrideProjectOwners</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList">DatazonePolicyGrantDetailOverrideProjectOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.useAssetType">useAssetType</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList">DatazonePolicyGrantDetailUseAssetTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPoolInput">addToProjectMemberPoolInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetTypeInput">createAssetTypeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnitInput">createDomainUnitInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprintInput">createEnvironmentFromBlueprintInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentInput">createEnvironmentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfileInput">createEnvironmentProfileInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormTypeInput">createFormTypeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossaryInput">createGlossaryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfileInput">createProjectFromProjectProfileInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectInput">createProjectInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfileInput">delegateCreateEnvironmentProfileInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwnersInput">overrideDomainUnitOwnersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwnersInput">overrideProjectOwnersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.useAssetTypeInput">useAssetTypeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addToProjectMemberPool`<sup>Required</sup> <a name="addToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPool"></a>

```java
public DatazonePolicyGrantDetailAddToProjectMemberPoolList getAddToProjectMemberPool();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList">DatazonePolicyGrantDetailAddToProjectMemberPoolList</a>

---

##### `createAssetType`<sup>Required</sup> <a name="createAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetType"></a>

```java
public DatazonePolicyGrantDetailCreateAssetTypeList getCreateAssetType();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList">DatazonePolicyGrantDetailCreateAssetTypeList</a>

---

##### `createDomainUnit`<sup>Required</sup> <a name="createDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnit"></a>

```java
public DatazonePolicyGrantDetailCreateDomainUnitList getCreateDomainUnit();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList">DatazonePolicyGrantDetailCreateDomainUnitList</a>

---

##### `createEnvironment`<sup>Required</sup> <a name="createEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironment"></a>

```java
public DatazonePolicyGrantDetailCreateEnvironmentList getCreateEnvironment();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList">DatazonePolicyGrantDetailCreateEnvironmentList</a>

---

##### `createEnvironmentFromBlueprint`<sup>Required</sup> <a name="createEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprint"></a>

```java
public DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList getCreateEnvironmentFromBlueprint();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList</a>

---

##### `createEnvironmentProfile`<sup>Required</sup> <a name="createEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfile"></a>

```java
public DatazonePolicyGrantDetailCreateEnvironmentProfileList getCreateEnvironmentProfile();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList">DatazonePolicyGrantDetailCreateEnvironmentProfileList</a>

---

##### `createFormType`<sup>Required</sup> <a name="createFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormType"></a>

```java
public DatazonePolicyGrantDetailCreateFormTypeList getCreateFormType();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList">DatazonePolicyGrantDetailCreateFormTypeList</a>

---

##### `createGlossary`<sup>Required</sup> <a name="createGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossary"></a>

```java
public DatazonePolicyGrantDetailCreateGlossaryList getCreateGlossary();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList">DatazonePolicyGrantDetailCreateGlossaryList</a>

---

##### `createProject`<sup>Required</sup> <a name="createProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProject"></a>

```java
public DatazonePolicyGrantDetailCreateProjectList getCreateProject();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList">DatazonePolicyGrantDetailCreateProjectList</a>

---

##### `createProjectFromProjectProfile`<sup>Required</sup> <a name="createProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfile"></a>

```java
public DatazonePolicyGrantDetailCreateProjectFromProjectProfileList getCreateProjectFromProjectProfile();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList">DatazonePolicyGrantDetailCreateProjectFromProjectProfileList</a>

---

##### `delegateCreateEnvironmentProfile`<sup>Required</sup> <a name="delegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfile"></a>

```java
public DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList getDelegateCreateEnvironmentProfile();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList</a>

---

##### `overrideDomainUnitOwners`<sup>Required</sup> <a name="overrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwners"></a>

```java
public DatazonePolicyGrantDetailOverrideDomainUnitOwnersList getOverrideDomainUnitOwners();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList">DatazonePolicyGrantDetailOverrideDomainUnitOwnersList</a>

---

##### `overrideProjectOwners`<sup>Required</sup> <a name="overrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwners"></a>

```java
public DatazonePolicyGrantDetailOverrideProjectOwnersList getOverrideProjectOwners();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList">DatazonePolicyGrantDetailOverrideProjectOwnersList</a>

---

##### `useAssetType`<sup>Required</sup> <a name="useAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.useAssetType"></a>

```java
public DatazonePolicyGrantDetailUseAssetTypeList getUseAssetType();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList">DatazonePolicyGrantDetailUseAssetTypeList</a>

---

##### `addToProjectMemberPoolInput`<sup>Optional</sup> <a name="addToProjectMemberPoolInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPoolInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailAddToProjectMemberPool> getAddToProjectMemberPoolInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>>

---

##### `createAssetTypeInput`<sup>Optional</sup> <a name="createAssetTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetTypeInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateAssetType> getCreateAssetTypeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>>

---

##### `createDomainUnitInput`<sup>Optional</sup> <a name="createDomainUnitInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnitInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateDomainUnit> getCreateDomainUnitInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>>

---

##### `createEnvironmentFromBlueprintInput`<sup>Optional</sup> <a name="createEnvironmentFromBlueprintInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprintInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint> getCreateEnvironmentFromBlueprintInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>>

---

##### `createEnvironmentInput`<sup>Optional</sup> <a name="createEnvironmentInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironment> getCreateEnvironmentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>>

---

##### `createEnvironmentProfileInput`<sup>Optional</sup> <a name="createEnvironmentProfileInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfileInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateEnvironmentProfile> getCreateEnvironmentProfileInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>>

---

##### `createFormTypeInput`<sup>Optional</sup> <a name="createFormTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormTypeInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateFormType> getCreateFormTypeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>>

---

##### `createGlossaryInput`<sup>Optional</sup> <a name="createGlossaryInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossaryInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateGlossary> getCreateGlossaryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>>

---

##### `createProjectFromProjectProfileInput`<sup>Optional</sup> <a name="createProjectFromProjectProfileInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfileInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateProjectFromProjectProfile> getCreateProjectFromProjectProfileInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>>

---

##### `createProjectInput`<sup>Optional</sup> <a name="createProjectInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailCreateProject> getCreateProjectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>>

---

##### `delegateCreateEnvironmentProfileInput`<sup>Optional</sup> <a name="delegateCreateEnvironmentProfileInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfileInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile> getDelegateCreateEnvironmentProfileInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>>

---

##### `overrideDomainUnitOwnersInput`<sup>Optional</sup> <a name="overrideDomainUnitOwnersInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwnersInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailOverrideDomainUnitOwners> getOverrideDomainUnitOwnersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>>

---

##### `overrideProjectOwnersInput`<sup>Optional</sup> <a name="overrideProjectOwnersInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwnersInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailOverrideProjectOwners> getOverrideProjectOwnersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>>

---

##### `useAssetTypeInput`<sup>Optional</sup> <a name="useAssetTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.useAssetTypeInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailUseAssetType> getUseAssetTypeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetail getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>

---


### DatazonePolicyGrantDetailOverrideDomainUnitOwnersList <a name="DatazonePolicyGrantDetailOverrideDomainUnitOwnersList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList;

new DatazonePolicyGrantDetailOverrideDomainUnitOwnersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.get"></a>

```java
public DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailOverrideDomainUnitOwners> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>>

---


### DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference <a name="DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference;

new DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resetIncludeChildDomainUnits"></a>

```java
public void resetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnitsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnitsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetailOverrideDomainUnitOwners getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>

---


### DatazonePolicyGrantDetailOverrideProjectOwnersList <a name="DatazonePolicyGrantDetailOverrideProjectOwnersList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailOverrideProjectOwnersList;

new DatazonePolicyGrantDetailOverrideProjectOwnersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.get"></a>

```java
public DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailOverrideProjectOwners> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>>

---


### DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference <a name="DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference;

new DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resetIncludeChildDomainUnits"></a>

```java
public void resetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnitsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnitsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetailOverrideProjectOwners getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>

---


### DatazonePolicyGrantDetailUseAssetTypeList <a name="DatazonePolicyGrantDetailUseAssetTypeList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailUseAssetTypeList;

new DatazonePolicyGrantDetailUseAssetTypeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.get"></a>

```java
public DatazonePolicyGrantDetailUseAssetTypeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantDetailUseAssetType> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>>

---


### DatazonePolicyGrantDetailUseAssetTypeOutputReference <a name="DatazonePolicyGrantDetailUseAssetTypeOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantDetailUseAssetTypeOutputReference;

new DatazonePolicyGrantDetailUseAssetTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resetDomainUnitId">resetDomainUnitId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainUnitId` <a name="resetDomainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resetDomainUnitId"></a>

```java
public void resetDomainUnitId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.domainUnitIdInput">domainUnitIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.domainUnitId">domainUnitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainUnitIdInput`<sup>Optional</sup> <a name="domainUnitIdInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.domainUnitIdInput"></a>

```java
public java.lang.String getDomainUnitIdInput();
```

- *Type:* java.lang.String

---

##### `domainUnitId`<sup>Required</sup> <a name="domainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.domainUnitId"></a>

```java
public java.lang.String getDomainUnitId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantDetailUseAssetType getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>

---


### DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList <a name="DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList;

new DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.get"></a>

```java
public DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>>

---


### DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference <a name="DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference;

new DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>

---


### DatazonePolicyGrantPrincipalDomainUnitList <a name="DatazonePolicyGrantPrincipalDomainUnitList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalDomainUnitList;

new DatazonePolicyGrantPrincipalDomainUnitList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.get"></a>

```java
public DatazonePolicyGrantPrincipalDomainUnitOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalDomainUnit> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>>

---


### DatazonePolicyGrantPrincipalDomainUnitOutputReference <a name="DatazonePolicyGrantPrincipalDomainUnitOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalDomainUnitOutputReference;

new DatazonePolicyGrantPrincipalDomainUnitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putAllDomainUnitsGrantFilter">putAllDomainUnitsGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetAllDomainUnitsGrantFilter">resetAllDomainUnitsGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitIdentifier">resetDomainUnitIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllDomainUnitsGrantFilter` <a name="putAllDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putAllDomainUnitsGrantFilter"></a>

```java
public void putAllDomainUnitsGrantFilter(IResolvable|java.util.List<DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putAllDomainUnitsGrantFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>>

---

##### `resetAllDomainUnitsGrantFilter` <a name="resetAllDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetAllDomainUnitsGrantFilter"></a>

```java
public void resetAllDomainUnitsGrantFilter()
```

##### `resetDomainUnitIdentifier` <a name="resetDomainUnitIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitIdentifier"></a>

```java
public void resetDomainUnitIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.allDomainUnitsGrantFilter">allDomainUnitsGrantFilter</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.allDomainUnitsGrantFilterInput">allDomainUnitsGrantFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignationInput">domainUnitDesignationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifierInput">domainUnitIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignation">domainUnitDesignation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifier">domainUnitIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allDomainUnitsGrantFilter`<sup>Required</sup> <a name="allDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.allDomainUnitsGrantFilter"></a>

```java
public DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList getAllDomainUnitsGrantFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList</a>

---

##### `allDomainUnitsGrantFilterInput`<sup>Optional</sup> <a name="allDomainUnitsGrantFilterInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.allDomainUnitsGrantFilterInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter> getAllDomainUnitsGrantFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>>

---

##### `domainUnitDesignationInput`<sup>Optional</sup> <a name="domainUnitDesignationInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignationInput"></a>

```java
public java.lang.String getDomainUnitDesignationInput();
```

- *Type:* java.lang.String

---

##### `domainUnitIdentifierInput`<sup>Optional</sup> <a name="domainUnitIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifierInput"></a>

```java
public java.lang.String getDomainUnitIdentifierInput();
```

- *Type:* java.lang.String

---

##### `domainUnitDesignation`<sup>Required</sup> <a name="domainUnitDesignation" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignation"></a>

```java
public java.lang.String getDomainUnitDesignation();
```

- *Type:* java.lang.String

---

##### `domainUnitIdentifier`<sup>Required</sup> <a name="domainUnitIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifier"></a>

```java
public java.lang.String getDomainUnitIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantPrincipalDomainUnit getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>

---


### DatazonePolicyGrantPrincipalGroupList <a name="DatazonePolicyGrantPrincipalGroupList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalGroupList;

new DatazonePolicyGrantPrincipalGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.get"></a>

```java
public DatazonePolicyGrantPrincipalGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalGroup> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>>

---


### DatazonePolicyGrantPrincipalGroupOutputReference <a name="DatazonePolicyGrantPrincipalGroupOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalGroupOutputReference;

new DatazonePolicyGrantPrincipalGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifierInput">groupIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifier">groupIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupIdentifierInput`<sup>Optional</sup> <a name="groupIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifierInput"></a>

```java
public java.lang.String getGroupIdentifierInput();
```

- *Type:* java.lang.String

---

##### `groupIdentifier`<sup>Required</sup> <a name="groupIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifier"></a>

```java
public java.lang.String getGroupIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantPrincipalGroup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>

---


### DatazonePolicyGrantPrincipalList <a name="DatazonePolicyGrantPrincipalList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalList;

new DatazonePolicyGrantPrincipalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.get"></a>

```java
public DatazonePolicyGrantPrincipalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipal> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>>

---


### DatazonePolicyGrantPrincipalOutputReference <a name="DatazonePolicyGrantPrincipalOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalOutputReference;

new DatazonePolicyGrantPrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit">putDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject">putProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetDomainUnit">resetDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDomainUnit` <a name="putDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit"></a>

```java
public void putDomainUnit(IResolvable|java.util.List<DatazonePolicyGrantPrincipalDomainUnit> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>>

---

##### `putGroup` <a name="putGroup" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup"></a>

```java
public void putGroup(IResolvable|java.util.List<DatazonePolicyGrantPrincipalGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>>

---

##### `putProject` <a name="putProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject"></a>

```java
public void putProject(IResolvable|java.util.List<DatazonePolicyGrantPrincipalProject> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>>

---

##### `putUser` <a name="putUser" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser"></a>

```java
public void putUser(IResolvable|java.util.List<DatazonePolicyGrantPrincipalUser> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>>

---

##### `resetDomainUnit` <a name="resetDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetDomainUnit"></a>

```java
public void resetDomainUnit()
```

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetProject"></a>

```java
public void resetProject()
```

##### `resetUser` <a name="resetUser" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnit">domainUnit</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList">DatazonePolicyGrantPrincipalDomainUnitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList">DatazonePolicyGrantPrincipalGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.project">project</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList">DatazonePolicyGrantPrincipalProjectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.user">user</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList">DatazonePolicyGrantPrincipalUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnitInput">domainUnitInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.groupInput">groupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.projectInput">projectInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.userInput">userInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainUnit`<sup>Required</sup> <a name="domainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnit"></a>

```java
public DatazonePolicyGrantPrincipalDomainUnitList getDomainUnit();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList">DatazonePolicyGrantPrincipalDomainUnitList</a>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.group"></a>

```java
public DatazonePolicyGrantPrincipalGroupList getGroup();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList">DatazonePolicyGrantPrincipalGroupList</a>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.project"></a>

```java
public DatazonePolicyGrantPrincipalProjectList getProject();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList">DatazonePolicyGrantPrincipalProjectList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.user"></a>

```java
public DatazonePolicyGrantPrincipalUserList getUser();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList">DatazonePolicyGrantPrincipalUserList</a>

---

##### `domainUnitInput`<sup>Optional</sup> <a name="domainUnitInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnitInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalDomainUnit> getDomainUnitInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.groupInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalGroup> getGroupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.projectInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalProject> getProjectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.userInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalUser> getUserInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantPrincipal getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>

---


### DatazonePolicyGrantPrincipalProjectDomainUnitFilterList <a name="DatazonePolicyGrantPrincipalProjectDomainUnitFilterList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList;

new DatazonePolicyGrantPrincipalProjectDomainUnitFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.get"></a>

```java
public DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalProjectDomainUnitFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>>

---


### DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference <a name="DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference;

new DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resetIncludeChildDomainUnits"></a>

```java
public void resetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.domainUnitInput">domainUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.domainUnit">domainUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainUnitInput`<sup>Optional</sup> <a name="domainUnitInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.domainUnitInput"></a>

```java
public java.lang.String getDomainUnitInput();
```

- *Type:* java.lang.String

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.includeChildDomainUnitsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnitsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `domainUnit`<sup>Required</sup> <a name="domainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.domainUnit"></a>

```java
public java.lang.String getDomainUnit();
```

- *Type:* java.lang.String

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.includeChildDomainUnits"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildDomainUnits();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantPrincipalProjectDomainUnitFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>

---


### DatazonePolicyGrantPrincipalProjectList <a name="DatazonePolicyGrantPrincipalProjectList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalProjectList;

new DatazonePolicyGrantPrincipalProjectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.get"></a>

```java
public DatazonePolicyGrantPrincipalProjectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalProject> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>>

---


### DatazonePolicyGrantPrincipalProjectOutputReference <a name="DatazonePolicyGrantPrincipalProjectOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalProjectOutputReference;

new DatazonePolicyGrantPrincipalProjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putDomainUnitFilter">putDomainUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetDomainUnitFilter">resetDomainUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectIdentifier">resetProjectIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDomainUnitFilter` <a name="putDomainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putDomainUnitFilter"></a>

```java
public void putDomainUnitFilter(IResolvable|java.util.List<DatazonePolicyGrantPrincipalProjectDomainUnitFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putDomainUnitFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>>

---

##### `resetDomainUnitFilter` <a name="resetDomainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetDomainUnitFilter"></a>

```java
public void resetDomainUnitFilter()
```

##### `resetProjectIdentifier` <a name="resetProjectIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectIdentifier"></a>

```java
public void resetProjectIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.domainUnitFilter">domainUnitFilter</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList">DatazonePolicyGrantPrincipalProjectDomainUnitFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.domainUnitFilterInput">domainUnitFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignationInput">projectDesignationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifierInput">projectIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignation">projectDesignation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifier">projectIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainUnitFilter`<sup>Required</sup> <a name="domainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.domainUnitFilter"></a>

```java
public DatazonePolicyGrantPrincipalProjectDomainUnitFilterList getDomainUnitFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList">DatazonePolicyGrantPrincipalProjectDomainUnitFilterList</a>

---

##### `domainUnitFilterInput`<sup>Optional</sup> <a name="domainUnitFilterInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.domainUnitFilterInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalProjectDomainUnitFilter> getDomainUnitFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>>

---

##### `projectDesignationInput`<sup>Optional</sup> <a name="projectDesignationInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignationInput"></a>

```java
public java.lang.String getProjectDesignationInput();
```

- *Type:* java.lang.String

---

##### `projectIdentifierInput`<sup>Optional</sup> <a name="projectIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifierInput"></a>

```java
public java.lang.String getProjectIdentifierInput();
```

- *Type:* java.lang.String

---

##### `projectDesignation`<sup>Required</sup> <a name="projectDesignation" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignation"></a>

```java
public java.lang.String getProjectDesignation();
```

- *Type:* java.lang.String

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifier"></a>

```java
public java.lang.String getProjectIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantPrincipalProject getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>

---


### DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList <a name="DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList;

new DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.get"></a>

```java
public DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalUserAllUsersGrantFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>>

---


### DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference <a name="DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference;

new DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantPrincipalUserAllUsersGrantFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>

---


### DatazonePolicyGrantPrincipalUserList <a name="DatazonePolicyGrantPrincipalUserList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalUserList;

new DatazonePolicyGrantPrincipalUserList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.get"></a>

```java
public DatazonePolicyGrantPrincipalUserOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalUser> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>>

---


### DatazonePolicyGrantPrincipalUserOutputReference <a name="DatazonePolicyGrantPrincipalUserOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.datazone_policy_grant.DatazonePolicyGrantPrincipalUserOutputReference;

new DatazonePolicyGrantPrincipalUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.putAllUsersGrantFilter">putAllUsersGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetAllUsersGrantFilter">resetAllUsersGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetUserIdentifier">resetUserIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllUsersGrantFilter` <a name="putAllUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.putAllUsersGrantFilter"></a>

```java
public void putAllUsersGrantFilter(IResolvable|java.util.List<DatazonePolicyGrantPrincipalUserAllUsersGrantFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.putAllUsersGrantFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>>

---

##### `resetAllUsersGrantFilter` <a name="resetAllUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetAllUsersGrantFilter"></a>

```java
public void resetAllUsersGrantFilter()
```

##### `resetUserIdentifier` <a name="resetUserIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetUserIdentifier"></a>

```java
public void resetUserIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilter">allUsersGrantFilter</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList">DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilterInput">allUsersGrantFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifierInput">userIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifier">userIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allUsersGrantFilter`<sup>Required</sup> <a name="allUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilter"></a>

```java
public DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList getAllUsersGrantFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList">DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList</a>

---

##### `allUsersGrantFilterInput`<sup>Optional</sup> <a name="allUsersGrantFilterInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilterInput"></a>

```java
public IResolvable|java.util.List<DatazonePolicyGrantPrincipalUserAllUsersGrantFilter> getAllUsersGrantFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>>

---

##### `userIdentifierInput`<sup>Optional</sup> <a name="userIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifierInput"></a>

```java
public java.lang.String getUserIdentifierInput();
```

- *Type:* java.lang.String

---

##### `userIdentifier`<sup>Required</sup> <a name="userIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifier"></a>

```java
public java.lang.String getUserIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazonePolicyGrantPrincipalUser getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>

---




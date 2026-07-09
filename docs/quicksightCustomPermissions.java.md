# `quicksightCustomPermissions` Submodule <a name="`quicksightCustomPermissions` Submodule" id="@cdktn/provider-aws.quicksightCustomPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightCustomPermissions <a name="QuicksightCustomPermissions" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions aws_quicksight_custom_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_custom_permissions.QuicksightCustomPermissions;

QuicksightCustomPermissions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .customPermissionsName(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .capabilities(IResolvable|java.util.List<QuicksightCustomPermissionsCapabilities>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.customPermissionsName">customPermissionsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.capabilities">capabilities</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>></code> | capabilities block. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customPermissionsName`<sup>Required</sup> <a name="customPermissionsName" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.customPermissionsName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.capabilities"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#region QuicksightCustomPermissions#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities">putCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapabilities` <a name="putCapabilities" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities"></a>

```java
public void putCapabilities(IResolvable|java.util.List<QuicksightCustomPermissionsCapabilities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>>

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.resetCapabilities"></a>

```java
public void resetCapabilities()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightCustomPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct"></a>

```java
import io.cdktn.providers.aws.quicksight_custom_permissions.QuicksightCustomPermissions;

QuicksightCustomPermissions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.quicksight_custom_permissions.QuicksightCustomPermissions;

QuicksightCustomPermissions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.quicksight_custom_permissions.QuicksightCustomPermissions;

QuicksightCustomPermissions.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.quicksight_custom_permissions.QuicksightCustomPermissions;

QuicksightCustomPermissions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightCustomPermissions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QuicksightCustomPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightCustomPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightCustomPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightCustomPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList">QuicksightCustomPermissionsCapabilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilitiesInput">capabilitiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsNameInput">customPermissionsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsName">customPermissionsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilities"></a>

```java
public QuicksightCustomPermissionsCapabilitiesList getCapabilities();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList">QuicksightCustomPermissionsCapabilitiesList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilitiesInput"></a>

```java
public IResolvable|java.util.List<QuicksightCustomPermissionsCapabilities> getCapabilitiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>>

---

##### `customPermissionsNameInput`<sup>Optional</sup> <a name="customPermissionsNameInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsNameInput"></a>

```java
public java.lang.String getCustomPermissionsNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `customPermissionsName`<sup>Required</sup> <a name="customPermissionsName" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsName"></a>

```java
public java.lang.String getCustomPermissionsName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightCustomPermissionsCapabilities <a name="QuicksightCustomPermissionsCapabilities" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_custom_permissions.QuicksightCustomPermissionsCapabilities;

QuicksightCustomPermissionsCapabilities.builder()
//  .addOrRunAnomalyDetectionForAnalyses(java.lang.String)
//  .createAndUpdateDashboardEmailReports(java.lang.String)
//  .createAndUpdateDatasets(java.lang.String)
//  .createAndUpdateDataSources(java.lang.String)
//  .createAndUpdateThemes(java.lang.String)
//  .createAndUpdateThresholdAlerts(java.lang.String)
//  .createSharedFolders(java.lang.String)
//  .createSpiceDataset(java.lang.String)
//  .exportToCsv(java.lang.String)
//  .exportToCsvInScheduledReports(java.lang.String)
//  .exportToExcel(java.lang.String)
//  .exportToExcelInScheduledReports(java.lang.String)
//  .exportToPdf(java.lang.String)
//  .exportToPdfInScheduledReports(java.lang.String)
//  .includeContentInScheduledReportsEmail(java.lang.String)
//  .printReports(java.lang.String)
//  .renameSharedFolders(java.lang.String)
//  .shareAnalyses(java.lang.String)
//  .shareDashboards(java.lang.String)
//  .shareDatasets(java.lang.String)
//  .shareDataSources(java.lang.String)
//  .subscribeDashboardEmailReports(java.lang.String)
//  .viewAccountSpiceCapacity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.addOrRunAnomalyDetectionForAnalyses">addOrRunAnomalyDetectionForAnalyses</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses QuicksightCustomPermissions#add_or_run_anomaly_detection_for_analyses}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDashboardEmailReports">createAndUpdateDashboardEmailReports</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports QuicksightCustomPermissions#create_and_update_dashboard_email_reports}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDatasets">createAndUpdateDatasets</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets QuicksightCustomPermissions#create_and_update_datasets}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDataSources">createAndUpdateDataSources</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources QuicksightCustomPermissions#create_and_update_data_sources}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThemes">createAndUpdateThemes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#create_and_update_themes QuicksightCustomPermissions#create_and_update_themes}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThresholdAlerts">createAndUpdateThresholdAlerts</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts QuicksightCustomPermissions#create_and_update_threshold_alerts}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSharedFolders">createSharedFolders</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#create_shared_folders QuicksightCustomPermissions#create_shared_folders}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpiceDataset">createSpiceDataset</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#create_spice_dataset QuicksightCustomPermissions#create_spice_dataset}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsv">exportToCsv</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#export_to_csv QuicksightCustomPermissions#export_to_csv}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsvInScheduledReports">exportToCsvInScheduledReports</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports QuicksightCustomPermissions#export_to_csv_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcel">exportToExcel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#export_to_excel QuicksightCustomPermissions#export_to_excel}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcelInScheduledReports">exportToExcelInScheduledReports</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports QuicksightCustomPermissions#export_to_excel_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdf">exportToPdf</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#export_to_pdf QuicksightCustomPermissions#export_to_pdf}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdfInScheduledReports">exportToPdfInScheduledReports</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports QuicksightCustomPermissions#export_to_pdf_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.includeContentInScheduledReportsEmail">includeContentInScheduledReportsEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email QuicksightCustomPermissions#include_content_in_scheduled_reports_email}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.printReports">printReports</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#print_reports QuicksightCustomPermissions#print_reports}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.renameSharedFolders">renameSharedFolders</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#rename_shared_folders QuicksightCustomPermissions#rename_shared_folders}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAnalyses">shareAnalyses</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#share_analyses QuicksightCustomPermissions#share_analyses}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDashboards">shareDashboards</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#share_dashboards QuicksightCustomPermissions#share_dashboards}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDatasets">shareDatasets</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#share_datasets QuicksightCustomPermissions#share_datasets}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDataSources">shareDataSources</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#share_data_sources QuicksightCustomPermissions#share_data_sources}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.subscribeDashboardEmailReports">subscribeDashboardEmailReports</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports QuicksightCustomPermissions#subscribe_dashboard_email_reports}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.viewAccountSpiceCapacity">viewAccountSpiceCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity QuicksightCustomPermissions#view_account_spice_capacity}. |

---

##### `addOrRunAnomalyDetectionForAnalyses`<sup>Optional</sup> <a name="addOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.addOrRunAnomalyDetectionForAnalyses"></a>

```java
public java.lang.String getAddOrRunAnomalyDetectionForAnalyses();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses QuicksightCustomPermissions#add_or_run_anomaly_detection_for_analyses}.

---

##### `createAndUpdateDashboardEmailReports`<sup>Optional</sup> <a name="createAndUpdateDashboardEmailReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDashboardEmailReports"></a>

```java
public java.lang.String getCreateAndUpdateDashboardEmailReports();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports QuicksightCustomPermissions#create_and_update_dashboard_email_reports}.

---

##### `createAndUpdateDatasets`<sup>Optional</sup> <a name="createAndUpdateDatasets" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDatasets"></a>

```java
public java.lang.String getCreateAndUpdateDatasets();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets QuicksightCustomPermissions#create_and_update_datasets}.

---

##### `createAndUpdateDataSources`<sup>Optional</sup> <a name="createAndUpdateDataSources" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDataSources"></a>

```java
public java.lang.String getCreateAndUpdateDataSources();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources QuicksightCustomPermissions#create_and_update_data_sources}.

---

##### `createAndUpdateThemes`<sup>Optional</sup> <a name="createAndUpdateThemes" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThemes"></a>

```java
public java.lang.String getCreateAndUpdateThemes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#create_and_update_themes QuicksightCustomPermissions#create_and_update_themes}.

---

##### `createAndUpdateThresholdAlerts`<sup>Optional</sup> <a name="createAndUpdateThresholdAlerts" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThresholdAlerts"></a>

```java
public java.lang.String getCreateAndUpdateThresholdAlerts();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts QuicksightCustomPermissions#create_and_update_threshold_alerts}.

---

##### `createSharedFolders`<sup>Optional</sup> <a name="createSharedFolders" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSharedFolders"></a>

```java
public java.lang.String getCreateSharedFolders();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#create_shared_folders QuicksightCustomPermissions#create_shared_folders}.

---

##### `createSpiceDataset`<sup>Optional</sup> <a name="createSpiceDataset" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpiceDataset"></a>

```java
public java.lang.String getCreateSpiceDataset();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#create_spice_dataset QuicksightCustomPermissions#create_spice_dataset}.

---

##### `exportToCsv`<sup>Optional</sup> <a name="exportToCsv" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsv"></a>

```java
public java.lang.String getExportToCsv();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#export_to_csv QuicksightCustomPermissions#export_to_csv}.

---

##### `exportToCsvInScheduledReports`<sup>Optional</sup> <a name="exportToCsvInScheduledReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsvInScheduledReports"></a>

```java
public java.lang.String getExportToCsvInScheduledReports();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports QuicksightCustomPermissions#export_to_csv_in_scheduled_reports}.

---

##### `exportToExcel`<sup>Optional</sup> <a name="exportToExcel" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcel"></a>

```java
public java.lang.String getExportToExcel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#export_to_excel QuicksightCustomPermissions#export_to_excel}.

---

##### `exportToExcelInScheduledReports`<sup>Optional</sup> <a name="exportToExcelInScheduledReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcelInScheduledReports"></a>

```java
public java.lang.String getExportToExcelInScheduledReports();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports QuicksightCustomPermissions#export_to_excel_in_scheduled_reports}.

---

##### `exportToPdf`<sup>Optional</sup> <a name="exportToPdf" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdf"></a>

```java
public java.lang.String getExportToPdf();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#export_to_pdf QuicksightCustomPermissions#export_to_pdf}.

---

##### `exportToPdfInScheduledReports`<sup>Optional</sup> <a name="exportToPdfInScheduledReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdfInScheduledReports"></a>

```java
public java.lang.String getExportToPdfInScheduledReports();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports QuicksightCustomPermissions#export_to_pdf_in_scheduled_reports}.

---

##### `includeContentInScheduledReportsEmail`<sup>Optional</sup> <a name="includeContentInScheduledReportsEmail" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.includeContentInScheduledReportsEmail"></a>

```java
public java.lang.String getIncludeContentInScheduledReportsEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email QuicksightCustomPermissions#include_content_in_scheduled_reports_email}.

---

##### `printReports`<sup>Optional</sup> <a name="printReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.printReports"></a>

```java
public java.lang.String getPrintReports();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#print_reports QuicksightCustomPermissions#print_reports}.

---

##### `renameSharedFolders`<sup>Optional</sup> <a name="renameSharedFolders" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.renameSharedFolders"></a>

```java
public java.lang.String getRenameSharedFolders();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#rename_shared_folders QuicksightCustomPermissions#rename_shared_folders}.

---

##### `shareAnalyses`<sup>Optional</sup> <a name="shareAnalyses" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAnalyses"></a>

```java
public java.lang.String getShareAnalyses();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#share_analyses QuicksightCustomPermissions#share_analyses}.

---

##### `shareDashboards`<sup>Optional</sup> <a name="shareDashboards" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDashboards"></a>

```java
public java.lang.String getShareDashboards();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#share_dashboards QuicksightCustomPermissions#share_dashboards}.

---

##### `shareDatasets`<sup>Optional</sup> <a name="shareDatasets" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDatasets"></a>

```java
public java.lang.String getShareDatasets();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#share_datasets QuicksightCustomPermissions#share_datasets}.

---

##### `shareDataSources`<sup>Optional</sup> <a name="shareDataSources" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDataSources"></a>

```java
public java.lang.String getShareDataSources();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#share_data_sources QuicksightCustomPermissions#share_data_sources}.

---

##### `subscribeDashboardEmailReports`<sup>Optional</sup> <a name="subscribeDashboardEmailReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.subscribeDashboardEmailReports"></a>

```java
public java.lang.String getSubscribeDashboardEmailReports();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports QuicksightCustomPermissions#subscribe_dashboard_email_reports}.

---

##### `viewAccountSpiceCapacity`<sup>Optional</sup> <a name="viewAccountSpiceCapacity" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.viewAccountSpiceCapacity"></a>

```java
public java.lang.String getViewAccountSpiceCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity QuicksightCustomPermissions#view_account_spice_capacity}.

---

### QuicksightCustomPermissionsConfig <a name="QuicksightCustomPermissionsConfig" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_custom_permissions.QuicksightCustomPermissionsConfig;

QuicksightCustomPermissionsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .customPermissionsName(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .capabilities(IResolvable|java.util.List<QuicksightCustomPermissionsCapabilities>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.customPermissionsName">customPermissionsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.capabilities">capabilities</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>></code> | capabilities block. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customPermissionsName`<sup>Required</sup> <a name="customPermissionsName" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.customPermissionsName"></a>

```java
public java.lang.String getCustomPermissionsName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.capabilities"></a>

```java
public IResolvable|java.util.List<QuicksightCustomPermissionsCapabilities> getCapabilities();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#region QuicksightCustomPermissions#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightCustomPermissionsCapabilitiesList <a name="QuicksightCustomPermissionsCapabilitiesList" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_custom_permissions.QuicksightCustomPermissionsCapabilitiesList;

new QuicksightCustomPermissionsCapabilitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.get"></a>

```java
public QuicksightCustomPermissionsCapabilitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightCustomPermissionsCapabilities> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>>

---


### QuicksightCustomPermissionsCapabilitiesOutputReference <a name="QuicksightCustomPermissionsCapabilitiesOutputReference" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_custom_permissions.QuicksightCustomPermissionsCapabilitiesOutputReference;

new QuicksightCustomPermissionsCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAddOrRunAnomalyDetectionForAnalyses">resetAddOrRunAnomalyDetectionForAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDashboardEmailReports">resetCreateAndUpdateDashboardEmailReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDatasets">resetCreateAndUpdateDatasets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDataSources">resetCreateAndUpdateDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThemes">resetCreateAndUpdateThemes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThresholdAlerts">resetCreateAndUpdateThresholdAlerts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSharedFolders">resetCreateSharedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpiceDataset">resetCreateSpiceDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsv">resetExportToCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsvInScheduledReports">resetExportToCsvInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcel">resetExportToExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcelInScheduledReports">resetExportToExcelInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdf">resetExportToPdf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdfInScheduledReports">resetExportToPdfInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIncludeContentInScheduledReportsEmail">resetIncludeContentInScheduledReportsEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPrintReports">resetPrintReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetRenameSharedFolders">resetRenameSharedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAnalyses">resetShareAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDashboards">resetShareDashboards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDatasets">resetShareDatasets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDataSources">resetShareDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSubscribeDashboardEmailReports">resetSubscribeDashboardEmailReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetViewAccountSpiceCapacity">resetViewAccountSpiceCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddOrRunAnomalyDetectionForAnalyses` <a name="resetAddOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAddOrRunAnomalyDetectionForAnalyses"></a>

```java
public void resetAddOrRunAnomalyDetectionForAnalyses()
```

##### `resetCreateAndUpdateDashboardEmailReports` <a name="resetCreateAndUpdateDashboardEmailReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDashboardEmailReports"></a>

```java
public void resetCreateAndUpdateDashboardEmailReports()
```

##### `resetCreateAndUpdateDatasets` <a name="resetCreateAndUpdateDatasets" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDatasets"></a>

```java
public void resetCreateAndUpdateDatasets()
```

##### `resetCreateAndUpdateDataSources` <a name="resetCreateAndUpdateDataSources" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDataSources"></a>

```java
public void resetCreateAndUpdateDataSources()
```

##### `resetCreateAndUpdateThemes` <a name="resetCreateAndUpdateThemes" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThemes"></a>

```java
public void resetCreateAndUpdateThemes()
```

##### `resetCreateAndUpdateThresholdAlerts` <a name="resetCreateAndUpdateThresholdAlerts" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThresholdAlerts"></a>

```java
public void resetCreateAndUpdateThresholdAlerts()
```

##### `resetCreateSharedFolders` <a name="resetCreateSharedFolders" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSharedFolders"></a>

```java
public void resetCreateSharedFolders()
```

##### `resetCreateSpiceDataset` <a name="resetCreateSpiceDataset" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpiceDataset"></a>

```java
public void resetCreateSpiceDataset()
```

##### `resetExportToCsv` <a name="resetExportToCsv" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsv"></a>

```java
public void resetExportToCsv()
```

##### `resetExportToCsvInScheduledReports` <a name="resetExportToCsvInScheduledReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsvInScheduledReports"></a>

```java
public void resetExportToCsvInScheduledReports()
```

##### `resetExportToExcel` <a name="resetExportToExcel" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcel"></a>

```java
public void resetExportToExcel()
```

##### `resetExportToExcelInScheduledReports` <a name="resetExportToExcelInScheduledReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcelInScheduledReports"></a>

```java
public void resetExportToExcelInScheduledReports()
```

##### `resetExportToPdf` <a name="resetExportToPdf" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdf"></a>

```java
public void resetExportToPdf()
```

##### `resetExportToPdfInScheduledReports` <a name="resetExportToPdfInScheduledReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdfInScheduledReports"></a>

```java
public void resetExportToPdfInScheduledReports()
```

##### `resetIncludeContentInScheduledReportsEmail` <a name="resetIncludeContentInScheduledReportsEmail" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIncludeContentInScheduledReportsEmail"></a>

```java
public void resetIncludeContentInScheduledReportsEmail()
```

##### `resetPrintReports` <a name="resetPrintReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPrintReports"></a>

```java
public void resetPrintReports()
```

##### `resetRenameSharedFolders` <a name="resetRenameSharedFolders" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetRenameSharedFolders"></a>

```java
public void resetRenameSharedFolders()
```

##### `resetShareAnalyses` <a name="resetShareAnalyses" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAnalyses"></a>

```java
public void resetShareAnalyses()
```

##### `resetShareDashboards` <a name="resetShareDashboards" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDashboards"></a>

```java
public void resetShareDashboards()
```

##### `resetShareDatasets` <a name="resetShareDatasets" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDatasets"></a>

```java
public void resetShareDatasets()
```

##### `resetShareDataSources` <a name="resetShareDataSources" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDataSources"></a>

```java
public void resetShareDataSources()
```

##### `resetSubscribeDashboardEmailReports` <a name="resetSubscribeDashboardEmailReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSubscribeDashboardEmailReports"></a>

```java
public void resetSubscribeDashboardEmailReports()
```

##### `resetViewAccountSpiceCapacity` <a name="resetViewAccountSpiceCapacity" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetViewAccountSpiceCapacity"></a>

```java
public void resetViewAccountSpiceCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalysesInput">addOrRunAnomalyDetectionForAnalysesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReportsInput">createAndUpdateDashboardEmailReportsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasetsInput">createAndUpdateDatasetsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSourcesInput">createAndUpdateDataSourcesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemesInput">createAndUpdateThemesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlertsInput">createAndUpdateThresholdAlertsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFoldersInput">createSharedFoldersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDatasetInput">createSpiceDatasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInput">exportToCsvInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReportsInput">exportToCsvInScheduledReportsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInput">exportToExcelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReportsInput">exportToExcelInScheduledReportsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInput">exportToPdfInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReportsInput">exportToPdfInScheduledReportsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmailInput">includeContentInScheduledReportsEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReportsInput">printReportsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFoldersInput">renameSharedFoldersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalysesInput">shareAnalysesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboardsInput">shareDashboardsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasetsInput">shareDatasetsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSourcesInput">shareDataSourcesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReportsInput">subscribeDashboardEmailReportsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacityInput">viewAccountSpiceCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses">addOrRunAnomalyDetectionForAnalyses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports">createAndUpdateDashboardEmailReports</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets">createAndUpdateDatasets</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources">createAndUpdateDataSources</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes">createAndUpdateThemes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts">createAndUpdateThresholdAlerts</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders">createSharedFolders</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset">createSpiceDataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv">exportToCsv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports">exportToCsvInScheduledReports</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel">exportToExcel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports">exportToExcelInScheduledReports</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf">exportToPdf</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports">exportToPdfInScheduledReports</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail">includeContentInScheduledReportsEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports">printReports</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders">renameSharedFolders</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses">shareAnalyses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards">shareDashboards</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets">shareDatasets</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources">shareDataSources</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports">subscribeDashboardEmailReports</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity">viewAccountSpiceCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addOrRunAnomalyDetectionForAnalysesInput`<sup>Optional</sup> <a name="addOrRunAnomalyDetectionForAnalysesInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalysesInput"></a>

```java
public java.lang.String getAddOrRunAnomalyDetectionForAnalysesInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateDashboardEmailReportsInput`<sup>Optional</sup> <a name="createAndUpdateDashboardEmailReportsInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReportsInput"></a>

```java
public java.lang.String getCreateAndUpdateDashboardEmailReportsInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateDatasetsInput`<sup>Optional</sup> <a name="createAndUpdateDatasetsInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasetsInput"></a>

```java
public java.lang.String getCreateAndUpdateDatasetsInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateDataSourcesInput`<sup>Optional</sup> <a name="createAndUpdateDataSourcesInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSourcesInput"></a>

```java
public java.lang.String getCreateAndUpdateDataSourcesInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateThemesInput`<sup>Optional</sup> <a name="createAndUpdateThemesInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemesInput"></a>

```java
public java.lang.String getCreateAndUpdateThemesInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateThresholdAlertsInput`<sup>Optional</sup> <a name="createAndUpdateThresholdAlertsInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlertsInput"></a>

```java
public java.lang.String getCreateAndUpdateThresholdAlertsInput();
```

- *Type:* java.lang.String

---

##### `createSharedFoldersInput`<sup>Optional</sup> <a name="createSharedFoldersInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFoldersInput"></a>

```java
public java.lang.String getCreateSharedFoldersInput();
```

- *Type:* java.lang.String

---

##### `createSpiceDatasetInput`<sup>Optional</sup> <a name="createSpiceDatasetInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDatasetInput"></a>

```java
public java.lang.String getCreateSpiceDatasetInput();
```

- *Type:* java.lang.String

---

##### `exportToCsvInput`<sup>Optional</sup> <a name="exportToCsvInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInput"></a>

```java
public java.lang.String getExportToCsvInput();
```

- *Type:* java.lang.String

---

##### `exportToCsvInScheduledReportsInput`<sup>Optional</sup> <a name="exportToCsvInScheduledReportsInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReportsInput"></a>

```java
public java.lang.String getExportToCsvInScheduledReportsInput();
```

- *Type:* java.lang.String

---

##### `exportToExcelInput`<sup>Optional</sup> <a name="exportToExcelInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInput"></a>

```java
public java.lang.String getExportToExcelInput();
```

- *Type:* java.lang.String

---

##### `exportToExcelInScheduledReportsInput`<sup>Optional</sup> <a name="exportToExcelInScheduledReportsInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReportsInput"></a>

```java
public java.lang.String getExportToExcelInScheduledReportsInput();
```

- *Type:* java.lang.String

---

##### `exportToPdfInput`<sup>Optional</sup> <a name="exportToPdfInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInput"></a>

```java
public java.lang.String getExportToPdfInput();
```

- *Type:* java.lang.String

---

##### `exportToPdfInScheduledReportsInput`<sup>Optional</sup> <a name="exportToPdfInScheduledReportsInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReportsInput"></a>

```java
public java.lang.String getExportToPdfInScheduledReportsInput();
```

- *Type:* java.lang.String

---

##### `includeContentInScheduledReportsEmailInput`<sup>Optional</sup> <a name="includeContentInScheduledReportsEmailInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmailInput"></a>

```java
public java.lang.String getIncludeContentInScheduledReportsEmailInput();
```

- *Type:* java.lang.String

---

##### `printReportsInput`<sup>Optional</sup> <a name="printReportsInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReportsInput"></a>

```java
public java.lang.String getPrintReportsInput();
```

- *Type:* java.lang.String

---

##### `renameSharedFoldersInput`<sup>Optional</sup> <a name="renameSharedFoldersInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFoldersInput"></a>

```java
public java.lang.String getRenameSharedFoldersInput();
```

- *Type:* java.lang.String

---

##### `shareAnalysesInput`<sup>Optional</sup> <a name="shareAnalysesInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalysesInput"></a>

```java
public java.lang.String getShareAnalysesInput();
```

- *Type:* java.lang.String

---

##### `shareDashboardsInput`<sup>Optional</sup> <a name="shareDashboardsInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboardsInput"></a>

```java
public java.lang.String getShareDashboardsInput();
```

- *Type:* java.lang.String

---

##### `shareDatasetsInput`<sup>Optional</sup> <a name="shareDatasetsInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasetsInput"></a>

```java
public java.lang.String getShareDatasetsInput();
```

- *Type:* java.lang.String

---

##### `shareDataSourcesInput`<sup>Optional</sup> <a name="shareDataSourcesInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSourcesInput"></a>

```java
public java.lang.String getShareDataSourcesInput();
```

- *Type:* java.lang.String

---

##### `subscribeDashboardEmailReportsInput`<sup>Optional</sup> <a name="subscribeDashboardEmailReportsInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReportsInput"></a>

```java
public java.lang.String getSubscribeDashboardEmailReportsInput();
```

- *Type:* java.lang.String

---

##### `viewAccountSpiceCapacityInput`<sup>Optional</sup> <a name="viewAccountSpiceCapacityInput" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacityInput"></a>

```java
public java.lang.String getViewAccountSpiceCapacityInput();
```

- *Type:* java.lang.String

---

##### `addOrRunAnomalyDetectionForAnalyses`<sup>Required</sup> <a name="addOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses"></a>

```java
public java.lang.String getAddOrRunAnomalyDetectionForAnalyses();
```

- *Type:* java.lang.String

---

##### `createAndUpdateDashboardEmailReports`<sup>Required</sup> <a name="createAndUpdateDashboardEmailReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports"></a>

```java
public java.lang.String getCreateAndUpdateDashboardEmailReports();
```

- *Type:* java.lang.String

---

##### `createAndUpdateDatasets`<sup>Required</sup> <a name="createAndUpdateDatasets" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets"></a>

```java
public java.lang.String getCreateAndUpdateDatasets();
```

- *Type:* java.lang.String

---

##### `createAndUpdateDataSources`<sup>Required</sup> <a name="createAndUpdateDataSources" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources"></a>

```java
public java.lang.String getCreateAndUpdateDataSources();
```

- *Type:* java.lang.String

---

##### `createAndUpdateThemes`<sup>Required</sup> <a name="createAndUpdateThemes" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes"></a>

```java
public java.lang.String getCreateAndUpdateThemes();
```

- *Type:* java.lang.String

---

##### `createAndUpdateThresholdAlerts`<sup>Required</sup> <a name="createAndUpdateThresholdAlerts" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts"></a>

```java
public java.lang.String getCreateAndUpdateThresholdAlerts();
```

- *Type:* java.lang.String

---

##### `createSharedFolders`<sup>Required</sup> <a name="createSharedFolders" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders"></a>

```java
public java.lang.String getCreateSharedFolders();
```

- *Type:* java.lang.String

---

##### `createSpiceDataset`<sup>Required</sup> <a name="createSpiceDataset" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset"></a>

```java
public java.lang.String getCreateSpiceDataset();
```

- *Type:* java.lang.String

---

##### `exportToCsv`<sup>Required</sup> <a name="exportToCsv" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv"></a>

```java
public java.lang.String getExportToCsv();
```

- *Type:* java.lang.String

---

##### `exportToCsvInScheduledReports`<sup>Required</sup> <a name="exportToCsvInScheduledReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports"></a>

```java
public java.lang.String getExportToCsvInScheduledReports();
```

- *Type:* java.lang.String

---

##### `exportToExcel`<sup>Required</sup> <a name="exportToExcel" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel"></a>

```java
public java.lang.String getExportToExcel();
```

- *Type:* java.lang.String

---

##### `exportToExcelInScheduledReports`<sup>Required</sup> <a name="exportToExcelInScheduledReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports"></a>

```java
public java.lang.String getExportToExcelInScheduledReports();
```

- *Type:* java.lang.String

---

##### `exportToPdf`<sup>Required</sup> <a name="exportToPdf" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf"></a>

```java
public java.lang.String getExportToPdf();
```

- *Type:* java.lang.String

---

##### `exportToPdfInScheduledReports`<sup>Required</sup> <a name="exportToPdfInScheduledReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports"></a>

```java
public java.lang.String getExportToPdfInScheduledReports();
```

- *Type:* java.lang.String

---

##### `includeContentInScheduledReportsEmail`<sup>Required</sup> <a name="includeContentInScheduledReportsEmail" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail"></a>

```java
public java.lang.String getIncludeContentInScheduledReportsEmail();
```

- *Type:* java.lang.String

---

##### `printReports`<sup>Required</sup> <a name="printReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports"></a>

```java
public java.lang.String getPrintReports();
```

- *Type:* java.lang.String

---

##### `renameSharedFolders`<sup>Required</sup> <a name="renameSharedFolders" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders"></a>

```java
public java.lang.String getRenameSharedFolders();
```

- *Type:* java.lang.String

---

##### `shareAnalyses`<sup>Required</sup> <a name="shareAnalyses" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses"></a>

```java
public java.lang.String getShareAnalyses();
```

- *Type:* java.lang.String

---

##### `shareDashboards`<sup>Required</sup> <a name="shareDashboards" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards"></a>

```java
public java.lang.String getShareDashboards();
```

- *Type:* java.lang.String

---

##### `shareDatasets`<sup>Required</sup> <a name="shareDatasets" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets"></a>

```java
public java.lang.String getShareDatasets();
```

- *Type:* java.lang.String

---

##### `shareDataSources`<sup>Required</sup> <a name="shareDataSources" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources"></a>

```java
public java.lang.String getShareDataSources();
```

- *Type:* java.lang.String

---

##### `subscribeDashboardEmailReports`<sup>Required</sup> <a name="subscribeDashboardEmailReports" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports"></a>

```java
public java.lang.String getSubscribeDashboardEmailReports();
```

- *Type:* java.lang.String

---

##### `viewAccountSpiceCapacity`<sup>Required</sup> <a name="viewAccountSpiceCapacity" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity"></a>

```java
public java.lang.String getViewAccountSpiceCapacity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightCustomPermissionsCapabilities getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

---




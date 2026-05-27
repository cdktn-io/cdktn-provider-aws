# `iamVirtualMfaDevice` Submodule <a name="`iamVirtualMfaDevice` Submodule" id="@cdktn/provider-aws.iamVirtualMfaDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamVirtualMfaDevice <a name="IamVirtualMfaDevice" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device aws_iam_virtual_mfa_device}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer"></a>

```java
import io.cdktn.providers.aws.iam_virtual_mfa_device.IamVirtualMfaDevice;

IamVirtualMfaDevice.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .virtualMfaDeviceName(java.lang.String)
//  .id(java.lang.String)
//  .path(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.virtualMfaDeviceName">virtualMfaDeviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#virtual_mfa_device_name IamVirtualMfaDevice#virtual_mfa_device_name}. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#id IamVirtualMfaDevice#id}. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#path IamVirtualMfaDevice#path}. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#tags IamVirtualMfaDevice#tags}. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#tags_all IamVirtualMfaDevice#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `virtualMfaDeviceName`<sup>Required</sup> <a name="virtualMfaDeviceName" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.virtualMfaDeviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#virtual_mfa_device_name IamVirtualMfaDevice#virtual_mfa_device_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#id IamVirtualMfaDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#path IamVirtualMfaDevice#path}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#tags IamVirtualMfaDevice#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#tags_all IamVirtualMfaDevice#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetId"></a>

```java
public void resetId()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetPath"></a>

```java
public void resetPath()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamVirtualMfaDevice resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isConstruct"></a>

```java
import io.cdktn.providers.aws.iam_virtual_mfa_device.IamVirtualMfaDevice;

IamVirtualMfaDevice.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.iam_virtual_mfa_device.IamVirtualMfaDevice;

IamVirtualMfaDevice.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.iam_virtual_mfa_device.IamVirtualMfaDevice;

IamVirtualMfaDevice.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.iam_virtual_mfa_device.IamVirtualMfaDevice;

IamVirtualMfaDevice.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamVirtualMfaDevice.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IamVirtualMfaDevice resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamVirtualMfaDevice to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamVirtualMfaDevice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IamVirtualMfaDevice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.base32StringSeed">base32StringSeed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.enableDate">enableDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.qrCodePng">qrCodePng</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.virtualMfaDeviceNameInput">virtualMfaDeviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.virtualMfaDeviceName">virtualMfaDeviceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `base32StringSeed`<sup>Required</sup> <a name="base32StringSeed" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.base32StringSeed"></a>

```java
public java.lang.String getBase32StringSeed();
```

- *Type:* java.lang.String

---

##### `enableDate`<sup>Required</sup> <a name="enableDate" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.enableDate"></a>

```java
public java.lang.String getEnableDate();
```

- *Type:* java.lang.String

---

##### `qrCodePng`<sup>Required</sup> <a name="qrCodePng" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.qrCodePng"></a>

```java
public java.lang.String getQrCodePng();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualMfaDeviceNameInput`<sup>Optional</sup> <a name="virtualMfaDeviceNameInput" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.virtualMfaDeviceNameInput"></a>

```java
public java.lang.String getVirtualMfaDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualMfaDeviceName`<sup>Required</sup> <a name="virtualMfaDeviceName" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.virtualMfaDeviceName"></a>

```java
public java.lang.String getVirtualMfaDeviceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamVirtualMfaDeviceConfig <a name="IamVirtualMfaDeviceConfig" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.iam_virtual_mfa_device.IamVirtualMfaDeviceConfig;

IamVirtualMfaDeviceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .virtualMfaDeviceName(java.lang.String)
//  .id(java.lang.String)
//  .path(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.virtualMfaDeviceName">virtualMfaDeviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#virtual_mfa_device_name IamVirtualMfaDevice#virtual_mfa_device_name}. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#id IamVirtualMfaDevice#id}. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#path IamVirtualMfaDevice#path}. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#tags IamVirtualMfaDevice#tags}. |
| <code><a href="#@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#tags_all IamVirtualMfaDevice#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `virtualMfaDeviceName`<sup>Required</sup> <a name="virtualMfaDeviceName" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.virtualMfaDeviceName"></a>

```java
public java.lang.String getVirtualMfaDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#virtual_mfa_device_name IamVirtualMfaDevice#virtual_mfa_device_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#id IamVirtualMfaDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#path IamVirtualMfaDevice#path}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#tags IamVirtualMfaDevice#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/iam_virtual_mfa_device#tags_all IamVirtualMfaDevice#tags_all}.

---




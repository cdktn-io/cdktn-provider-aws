# `devicefarmInstanceProfile` Submodule <a name="`devicefarmInstanceProfile` Submodule" id="@cdktn/provider-aws.devicefarmInstanceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmInstanceProfile <a name="DevicefarmInstanceProfile" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile aws_devicefarm_instance_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer"></a>

```java
import io.cdktn.providers.aws.devicefarm_instance_profile.DevicefarmInstanceProfile;

DevicefarmInstanceProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .excludeAppPackagesFromCleanup(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .packageCleanup(java.lang.Boolean|IResolvable)
//  .rebootAfterUse(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.excludeAppPackagesFromCleanup">excludeAppPackagesFromCleanup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.packageCleanup">packageCleanup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.rebootAfterUse">rebootAfterUse</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}.

---

##### `excludeAppPackagesFromCleanup`<sup>Optional</sup> <a name="excludeAppPackagesFromCleanup" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.excludeAppPackagesFromCleanup"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `packageCleanup`<sup>Optional</sup> <a name="packageCleanup" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.packageCleanup"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}.

---

##### `rebootAfterUse`<sup>Optional</sup> <a name="rebootAfterUse" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.rebootAfterUse"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#region DevicefarmInstanceProfile#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetExcludeAppPackagesFromCleanup">resetExcludeAppPackagesFromCleanup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetPackageCleanup">resetPackageCleanup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetRebootAfterUse">resetRebootAfterUse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExcludeAppPackagesFromCleanup` <a name="resetExcludeAppPackagesFromCleanup" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetExcludeAppPackagesFromCleanup"></a>

```java
public void resetExcludeAppPackagesFromCleanup()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetId"></a>

```java
public void resetId()
```

##### `resetPackageCleanup` <a name="resetPackageCleanup" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetPackageCleanup"></a>

```java
public void resetPackageCleanup()
```

##### `resetRebootAfterUse` <a name="resetRebootAfterUse" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetRebootAfterUse"></a>

```java
public void resetRebootAfterUse()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevicefarmInstanceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct"></a>

```java
import io.cdktn.providers.aws.devicefarm_instance_profile.DevicefarmInstanceProfile;

DevicefarmInstanceProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.devicefarm_instance_profile.DevicefarmInstanceProfile;

DevicefarmInstanceProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.devicefarm_instance_profile.DevicefarmInstanceProfile;

DevicefarmInstanceProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.devicefarm_instance_profile.DevicefarmInstanceProfile;

DevicefarmInstanceProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevicefarmInstanceProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DevicefarmInstanceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevicefarmInstanceProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevicefarmInstanceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DevicefarmInstanceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanupInput">excludeAppPackagesFromCleanupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanupInput">packageCleanupInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUseInput">rebootAfterUseInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanup">excludeAppPackagesFromCleanup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanup">packageCleanup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUse">rebootAfterUse</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `excludeAppPackagesFromCleanupInput`<sup>Optional</sup> <a name="excludeAppPackagesFromCleanupInput" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanupInput"></a>

```java
public java.util.List<java.lang.String> getExcludeAppPackagesFromCleanupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `packageCleanupInput`<sup>Optional</sup> <a name="packageCleanupInput" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanupInput"></a>

```java
public java.lang.Boolean|IResolvable getPackageCleanupInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rebootAfterUseInput`<sup>Optional</sup> <a name="rebootAfterUseInput" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUseInput"></a>

```java
public java.lang.Boolean|IResolvable getRebootAfterUseInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `excludeAppPackagesFromCleanup`<sup>Required</sup> <a name="excludeAppPackagesFromCleanup" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanup"></a>

```java
public java.util.List<java.lang.String> getExcludeAppPackagesFromCleanup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `packageCleanup`<sup>Required</sup> <a name="packageCleanup" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanup"></a>

```java
public java.lang.Boolean|IResolvable getPackageCleanup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rebootAfterUse`<sup>Required</sup> <a name="rebootAfterUse" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUse"></a>

```java
public java.lang.Boolean|IResolvable getRebootAfterUse();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmInstanceProfileConfig <a name="DevicefarmInstanceProfileConfig" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.devicefarm_instance_profile.DevicefarmInstanceProfileConfig;

DevicefarmInstanceProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .excludeAppPackagesFromCleanup(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .packageCleanup(java.lang.Boolean|IResolvable)
//  .rebootAfterUse(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.excludeAppPackagesFromCleanup">excludeAppPackagesFromCleanup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.packageCleanup">packageCleanup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.rebootAfterUse">rebootAfterUse</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}. |
| <code><a href="#@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}.

---

##### `excludeAppPackagesFromCleanup`<sup>Optional</sup> <a name="excludeAppPackagesFromCleanup" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.excludeAppPackagesFromCleanup"></a>

```java
public java.util.List<java.lang.String> getExcludeAppPackagesFromCleanup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `packageCleanup`<sup>Optional</sup> <a name="packageCleanup" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.packageCleanup"></a>

```java
public java.lang.Boolean|IResolvable getPackageCleanup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}.

---

##### `rebootAfterUse`<sup>Optional</sup> <a name="rebootAfterUse" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.rebootAfterUse"></a>

```java
public java.lang.Boolean|IResolvable getRebootAfterUse();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#region DevicefarmInstanceProfile#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}.

---




# `finspaceKxVolume` Submodule <a name="`finspaceKxVolume` Submodule" id="@cdktn/provider-aws.finspaceKxVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxVolume <a name="FinspaceKxVolume" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume aws_finspace_kx_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer"></a>

```java
import io.cdktn.providers.aws.finspace_kx_volume.FinspaceKxVolume;

FinspaceKxVolume.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .availabilityZones(java.util.List<java.lang.String>)
    .azMode(java.lang.String)
    .environmentId(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .nas1Configuration(IResolvable|java.util.List<FinspaceKxVolumeNas1Configuration>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FinspaceKxVolumeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#availability_zones FinspaceKxVolume#availability_zones}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.azMode">azMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#az_mode FinspaceKxVolume#az_mode}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#environment_id FinspaceKxVolume#environment_id}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#name FinspaceKxVolume#name}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#description FinspaceKxVolume#description}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#id FinspaceKxVolume#id}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.nas1Configuration">nas1Configuration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>></code> | nas1_configuration block. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#tags FinspaceKxVolume#tags}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#tags_all FinspaceKxVolume#tags_all}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#availability_zones FinspaceKxVolume#availability_zones}.

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.azMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#az_mode FinspaceKxVolume#az_mode}.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.environmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#environment_id FinspaceKxVolume#environment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#name FinspaceKxVolume#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#description FinspaceKxVolume#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#id FinspaceKxVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nas1Configuration`<sup>Optional</sup> <a name="nas1Configuration" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.nas1Configuration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>>

nas1_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#nas1_configuration FinspaceKxVolume#nas1_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#region FinspaceKxVolume#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#tags FinspaceKxVolume#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#tags_all FinspaceKxVolume#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#timeouts FinspaceKxVolume#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.putNas1Configuration">putNas1Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetNas1Configuration">resetNas1Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNas1Configuration` <a name="putNas1Configuration" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.putNas1Configuration"></a>

```java
public void putNas1Configuration(IResolvable|java.util.List<FinspaceKxVolumeNas1Configuration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.putNas1Configuration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.putTimeouts"></a>

```java
public void putTimeouts(FinspaceKxVolumeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetId"></a>

```java
public void resetId()
```

##### `resetNas1Configuration` <a name="resetNas1Configuration" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetNas1Configuration"></a>

```java
public void resetNas1Configuration()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FinspaceKxVolume resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.isConstruct"></a>

```java
import io.cdktn.providers.aws.finspace_kx_volume.FinspaceKxVolume;

FinspaceKxVolume.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.finspace_kx_volume.FinspaceKxVolume;

FinspaceKxVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.finspace_kx_volume.FinspaceKxVolume;

FinspaceKxVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.finspace_kx_volume.FinspaceKxVolume;

FinspaceKxVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FinspaceKxVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FinspaceKxVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FinspaceKxVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FinspaceKxVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FinspaceKxVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.attachedClusters">attachedClusters</a></code> | <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList">FinspaceKxVolumeAttachedClustersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.lastModifiedTimestamp">lastModifiedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nas1Configuration">nas1Configuration</a></code> | <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList">FinspaceKxVolumeNas1ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference">FinspaceKxVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.azModeInput">azModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.environmentIdInput">environmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nas1ConfigurationInput">nas1ConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.azMode">azMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `attachedClusters`<sup>Required</sup> <a name="attachedClusters" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.attachedClusters"></a>

```java
public FinspaceKxVolumeAttachedClustersList getAttachedClusters();
```

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList">FinspaceKxVolumeAttachedClustersList</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.createdTimestamp"></a>

```java
public java.lang.String getCreatedTimestamp();
```

- *Type:* java.lang.String

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="lastModifiedTimestamp" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.lastModifiedTimestamp"></a>

```java
public java.lang.String getLastModifiedTimestamp();
```

- *Type:* java.lang.String

---

##### `nas1Configuration`<sup>Required</sup> <a name="nas1Configuration" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nas1Configuration"></a>

```java
public FinspaceKxVolumeNas1ConfigurationList getNas1Configuration();
```

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList">FinspaceKxVolumeNas1ConfigurationList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.timeouts"></a>

```java
public FinspaceKxVolumeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference">FinspaceKxVolumeTimeoutsOutputReference</a>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `azModeInput`<sup>Optional</sup> <a name="azModeInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.azModeInput"></a>

```java
public java.lang.String getAzModeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.environmentIdInput"></a>

```java
public java.lang.String getEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nas1ConfigurationInput`<sup>Optional</sup> <a name="nas1ConfigurationInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nas1ConfigurationInput"></a>

```java
public IResolvable|java.util.List<FinspaceKxVolumeNas1Configuration> getNas1ConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.timeoutsInput"></a>

```java
public IResolvable|FinspaceKxVolumeTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.azMode"></a>

```java
public java.lang.String getAzMode();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxVolumeAttachedClusters <a name="FinspaceKxVolumeAttachedClusters" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClusters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClusters.Initializer"></a>

```java
import io.cdktn.providers.aws.finspace_kx_volume.FinspaceKxVolumeAttachedClusters;

FinspaceKxVolumeAttachedClusters.builder()
    .build();
```


### FinspaceKxVolumeConfig <a name="FinspaceKxVolumeConfig" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.finspace_kx_volume.FinspaceKxVolumeConfig;

FinspaceKxVolumeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .availabilityZones(java.util.List<java.lang.String>)
    .azMode(java.lang.String)
    .environmentId(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .nas1Configuration(IResolvable|java.util.List<FinspaceKxVolumeNas1Configuration>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FinspaceKxVolumeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#availability_zones FinspaceKxVolume#availability_zones}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.azMode">azMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#az_mode FinspaceKxVolume#az_mode}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#environment_id FinspaceKxVolume#environment_id}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#name FinspaceKxVolume#name}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#description FinspaceKxVolume#description}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#id FinspaceKxVolume#id}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.nas1Configuration">nas1Configuration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>></code> | nas1_configuration block. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#tags FinspaceKxVolume#tags}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#tags_all FinspaceKxVolume#tags_all}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#availability_zones FinspaceKxVolume#availability_zones}.

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.azMode"></a>

```java
public java.lang.String getAzMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#az_mode FinspaceKxVolume#az_mode}.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#environment_id FinspaceKxVolume#environment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#name FinspaceKxVolume#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#description FinspaceKxVolume#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#id FinspaceKxVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nas1Configuration`<sup>Optional</sup> <a name="nas1Configuration" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.nas1Configuration"></a>

```java
public IResolvable|java.util.List<FinspaceKxVolumeNas1Configuration> getNas1Configuration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>>

nas1_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#nas1_configuration FinspaceKxVolume#nas1_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#region FinspaceKxVolume#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#tags FinspaceKxVolume#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#tags_all FinspaceKxVolume#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.timeouts"></a>

```java
public FinspaceKxVolumeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#timeouts FinspaceKxVolume#timeouts}

---

### FinspaceKxVolumeNas1Configuration <a name="FinspaceKxVolumeNas1Configuration" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.Initializer"></a>

```java
import io.cdktn.providers.aws.finspace_kx_volume.FinspaceKxVolumeNas1Configuration;

FinspaceKxVolumeNas1Configuration.builder()
    .size(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#size FinspaceKxVolume#size}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#size FinspaceKxVolume#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}.

---

### FinspaceKxVolumeTimeouts <a name="FinspaceKxVolumeTimeouts" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.finspace_kx_volume.FinspaceKxVolumeTimeouts;

FinspaceKxVolumeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#create FinspaceKxVolume#create}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#delete FinspaceKxVolume#delete}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#update FinspaceKxVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#create FinspaceKxVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#delete FinspaceKxVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/finspace_kx_volume#update FinspaceKxVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxVolumeAttachedClustersList <a name="FinspaceKxVolumeAttachedClustersList" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer"></a>

```java
import io.cdktn.providers.aws.finspace_kx_volume.FinspaceKxVolumeAttachedClustersList;

new FinspaceKxVolumeAttachedClustersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.get"></a>

```java
public FinspaceKxVolumeAttachedClustersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FinspaceKxVolumeAttachedClustersOutputReference <a name="FinspaceKxVolumeAttachedClustersOutputReference" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.finspace_kx_volume.FinspaceKxVolumeAttachedClustersOutputReference;

new FinspaceKxVolumeAttachedClustersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterStatus">clusterStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClusters">FinspaceKxVolumeAttachedClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `clusterStatus`<sup>Required</sup> <a name="clusterStatus" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterStatus"></a>

```java
public java.lang.String getClusterStatus();
```

- *Type:* java.lang.String

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.internalValue"></a>

```java
public FinspaceKxVolumeAttachedClusters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClusters">FinspaceKxVolumeAttachedClusters</a>

---


### FinspaceKxVolumeNas1ConfigurationList <a name="FinspaceKxVolumeNas1ConfigurationList" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.finspace_kx_volume.FinspaceKxVolumeNas1ConfigurationList;

new FinspaceKxVolumeNas1ConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.get"></a>

```java
public FinspaceKxVolumeNas1ConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FinspaceKxVolumeNas1Configuration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>>

---


### FinspaceKxVolumeNas1ConfigurationOutputReference <a name="FinspaceKxVolumeNas1ConfigurationOutputReference" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.finspace_kx_volume.FinspaceKxVolumeNas1ConfigurationOutputReference;

new FinspaceKxVolumeNas1ConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|FinspaceKxVolumeNas1Configuration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>

---


### FinspaceKxVolumeTimeoutsOutputReference <a name="FinspaceKxVolumeTimeoutsOutputReference" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.finspace_kx_volume.FinspaceKxVolumeTimeoutsOutputReference;

new FinspaceKxVolumeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|FinspaceKxVolumeTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a>

---




# `finspaceKxScalingGroup` Submodule <a name="`finspaceKxScalingGroup` Submodule" id="@cdktn/provider-aws.finspaceKxScalingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxScalingGroup <a name="FinspaceKxScalingGroup" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group aws_finspace_kx_scaling_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer"></a>

```java
import io.cdktn.providers.aws.finspace_kx_scaling_group.FinspaceKxScalingGroup;

FinspaceKxScalingGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .availabilityZoneId(java.lang.String)
    .environmentId(java.lang.String)
    .hostType(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FinspaceKxScalingGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#availability_zone_id FinspaceKxScalingGroup#availability_zone_id}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#environment_id FinspaceKxScalingGroup#environment_id}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.hostType">hostType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#host_type FinspaceKxScalingGroup#host_type}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#name FinspaceKxScalingGroup#name}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#id FinspaceKxScalingGroup#id}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#tags FinspaceKxScalingGroup#tags}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#tags_all FinspaceKxScalingGroup#tags_all}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts">FinspaceKxScalingGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.availabilityZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#availability_zone_id FinspaceKxScalingGroup#availability_zone_id}.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.environmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#environment_id FinspaceKxScalingGroup#environment_id}.

---

##### `hostType`<sup>Required</sup> <a name="hostType" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.hostType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#host_type FinspaceKxScalingGroup#host_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#name FinspaceKxScalingGroup#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#id FinspaceKxScalingGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#region FinspaceKxScalingGroup#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#tags FinspaceKxScalingGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#tags_all FinspaceKxScalingGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts">FinspaceKxScalingGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#timeouts FinspaceKxScalingGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.putTimeouts"></a>

```java
public void putTimeouts(FinspaceKxScalingGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts">FinspaceKxScalingGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FinspaceKxScalingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.isConstruct"></a>

```java
import io.cdktn.providers.aws.finspace_kx_scaling_group.FinspaceKxScalingGroup;

FinspaceKxScalingGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.finspace_kx_scaling_group.FinspaceKxScalingGroup;

FinspaceKxScalingGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.finspace_kx_scaling_group.FinspaceKxScalingGroup;

FinspaceKxScalingGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.finspace_kx_scaling_group.FinspaceKxScalingGroup;

FinspaceKxScalingGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FinspaceKxScalingGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FinspaceKxScalingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FinspaceKxScalingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FinspaceKxScalingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FinspaceKxScalingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.clusters">clusters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.lastModifiedTimestamp">lastModifiedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference">FinspaceKxScalingGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.environmentIdInput">environmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.hostTypeInput">hostTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts">FinspaceKxScalingGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.hostType">hostType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `clusters`<sup>Required</sup> <a name="clusters" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.clusters"></a>

```java
public java.util.List<java.lang.String> getClusters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.createdTimestamp"></a>

```java
public java.lang.String getCreatedTimestamp();
```

- *Type:* java.lang.String

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="lastModifiedTimestamp" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.lastModifiedTimestamp"></a>

```java
public java.lang.String getLastModifiedTimestamp();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.timeouts"></a>

```java
public FinspaceKxScalingGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference">FinspaceKxScalingGroupTimeoutsOutputReference</a>

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.availabilityZoneIdInput"></a>

```java
public java.lang.String getAvailabilityZoneIdInput();
```

- *Type:* java.lang.String

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.environmentIdInput"></a>

```java
public java.lang.String getEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `hostTypeInput`<sup>Optional</sup> <a name="hostTypeInput" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.hostTypeInput"></a>

```java
public java.lang.String getHostTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.timeoutsInput"></a>

```java
public IResolvable|FinspaceKxScalingGroupTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts">FinspaceKxScalingGroupTimeouts</a>

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `hostType`<sup>Required</sup> <a name="hostType" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.hostType"></a>

```java
public java.lang.String getHostType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxScalingGroupConfig <a name="FinspaceKxScalingGroupConfig" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.finspace_kx_scaling_group.FinspaceKxScalingGroupConfig;

FinspaceKxScalingGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .availabilityZoneId(java.lang.String)
    .environmentId(java.lang.String)
    .hostType(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FinspaceKxScalingGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#availability_zone_id FinspaceKxScalingGroup#availability_zone_id}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#environment_id FinspaceKxScalingGroup#environment_id}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.hostType">hostType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#host_type FinspaceKxScalingGroup#host_type}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#name FinspaceKxScalingGroup#name}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#id FinspaceKxScalingGroup#id}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#tags FinspaceKxScalingGroup#tags}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#tags_all FinspaceKxScalingGroup#tags_all}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts">FinspaceKxScalingGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#availability_zone_id FinspaceKxScalingGroup#availability_zone_id}.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#environment_id FinspaceKxScalingGroup#environment_id}.

---

##### `hostType`<sup>Required</sup> <a name="hostType" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.hostType"></a>

```java
public java.lang.String getHostType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#host_type FinspaceKxScalingGroup#host_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#name FinspaceKxScalingGroup#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#id FinspaceKxScalingGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#region FinspaceKxScalingGroup#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#tags FinspaceKxScalingGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#tags_all FinspaceKxScalingGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupConfig.property.timeouts"></a>

```java
public FinspaceKxScalingGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts">FinspaceKxScalingGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#timeouts FinspaceKxScalingGroup#timeouts}

---

### FinspaceKxScalingGroupTimeouts <a name="FinspaceKxScalingGroupTimeouts" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.finspace_kx_scaling_group.FinspaceKxScalingGroupTimeouts;

FinspaceKxScalingGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#create FinspaceKxScalingGroup#create}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#delete FinspaceKxScalingGroup#delete}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#update FinspaceKxScalingGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#create FinspaceKxScalingGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#delete FinspaceKxScalingGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/finspace_kx_scaling_group#update FinspaceKxScalingGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxScalingGroupTimeoutsOutputReference <a name="FinspaceKxScalingGroupTimeoutsOutputReference" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.finspace_kx_scaling_group.FinspaceKxScalingGroupTimeoutsOutputReference;

new FinspaceKxScalingGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts">FinspaceKxScalingGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|FinspaceKxScalingGroupTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.finspaceKxScalingGroup.FinspaceKxScalingGroupTimeouts">FinspaceKxScalingGroupTimeouts</a>

---




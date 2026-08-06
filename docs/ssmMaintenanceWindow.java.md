# `ssmMaintenanceWindow` Submodule <a name="`ssmMaintenanceWindow` Submodule" id="@cdktn/provider-aws.ssmMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmMaintenanceWindow <a name="SsmMaintenanceWindow" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window aws_ssm_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer"></a>

```java
import io.cdktn.providers.aws.ssm_maintenance_window.SsmMaintenanceWindow;

SsmMaintenanceWindow.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cutoff(java.lang.Number)
    .duration(java.lang.Number)
    .name(java.lang.String)
    .schedule(java.lang.String)
//  .allowUnassociatedTargets(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .endDate(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .scheduleOffset(java.lang.Number)
//  .scheduleTimezone(java.lang.String)
//  .startDate(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.cutoff">cutoff</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#cutoff SsmMaintenanceWindow#cutoff}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.duration">duration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#duration SsmMaintenanceWindow#duration}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#name SsmMaintenanceWindow#name}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.schedule">schedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#schedule SsmMaintenanceWindow#schedule}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.allowUnassociatedTargets">allowUnassociatedTargets</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#description SsmMaintenanceWindow#description}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#enabled SsmMaintenanceWindow#enabled}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.endDate">endDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#end_date SsmMaintenanceWindow#end_date}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#id SsmMaintenanceWindow#id}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scheduleOffset">scheduleOffset</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#schedule_offset SsmMaintenanceWindow#schedule_offset}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scheduleTimezone">scheduleTimezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#schedule_timezone SsmMaintenanceWindow#schedule_timezone}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.startDate">startDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#start_date SsmMaintenanceWindow#start_date}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#tags SsmMaintenanceWindow#tags}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#tags_all SsmMaintenanceWindow#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cutoff`<sup>Required</sup> <a name="cutoff" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.cutoff"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#cutoff SsmMaintenanceWindow#cutoff}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.duration"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#duration SsmMaintenanceWindow#duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#name SsmMaintenanceWindow#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.schedule"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#schedule SsmMaintenanceWindow#schedule}.

---

##### `allowUnassociatedTargets`<sup>Optional</sup> <a name="allowUnassociatedTargets" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.allowUnassociatedTargets"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#description SsmMaintenanceWindow#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#enabled SsmMaintenanceWindow#enabled}.

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.endDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#end_date SsmMaintenanceWindow#end_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#id SsmMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#region SsmMaintenanceWindow#region}

---

##### `scheduleOffset`<sup>Optional</sup> <a name="scheduleOffset" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scheduleOffset"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#schedule_offset SsmMaintenanceWindow#schedule_offset}.

---

##### `scheduleTimezone`<sup>Optional</sup> <a name="scheduleTimezone" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scheduleTimezone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#schedule_timezone SsmMaintenanceWindow#schedule_timezone}.

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.startDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#start_date SsmMaintenanceWindow#start_date}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#tags SsmMaintenanceWindow#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#tags_all SsmMaintenanceWindow#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetAllowUnassociatedTargets">resetAllowUnassociatedTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleOffset">resetScheduleOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleTimezone">resetScheduleTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowUnassociatedTargets` <a name="resetAllowUnassociatedTargets" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetAllowUnassociatedTargets"></a>

```java
public void resetAllowUnassociatedTargets()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEndDate` <a name="resetEndDate" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEndDate"></a>

```java
public void resetEndDate()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetScheduleOffset` <a name="resetScheduleOffset" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleOffset"></a>

```java
public void resetScheduleOffset()
```

##### `resetScheduleTimezone` <a name="resetScheduleTimezone" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleTimezone"></a>

```java
public void resetScheduleTimezone()
```

##### `resetStartDate` <a name="resetStartDate" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetStartDate"></a>

```java
public void resetStartDate()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmMaintenanceWindow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct"></a>

```java
import io.cdktn.providers.aws.ssm_maintenance_window.SsmMaintenanceWindow;

SsmMaintenanceWindow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ssm_maintenance_window.SsmMaintenanceWindow;

SsmMaintenanceWindow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ssm_maintenance_window.SsmMaintenanceWindow;

SsmMaintenanceWindow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ssm_maintenance_window.SsmMaintenanceWindow;

SsmMaintenanceWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsmMaintenanceWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SsmMaintenanceWindow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsmMaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsmMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SsmMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargetsInput">allowUnassociatedTargetsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoffInput">cutoffInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDateInput">endDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffsetInput">scheduleOffsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezoneInput">scheduleTimezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDateInput">startDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargets">allowUnassociatedTargets</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoff">cutoff</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffset">scheduleOffset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezone">scheduleTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowUnassociatedTargetsInput`<sup>Optional</sup> <a name="allowUnassociatedTargetsInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargetsInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowUnassociatedTargetsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cutoffInput`<sup>Optional</sup> <a name="cutoffInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoffInput"></a>

```java
public java.lang.Number getCutoffInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDateInput"></a>

```java
public java.lang.String getEndDateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `scheduleOffsetInput`<sup>Optional</sup> <a name="scheduleOffsetInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffsetInput"></a>

```java
public java.lang.Number getScheduleOffsetInput();
```

- *Type:* java.lang.Number

---

##### `scheduleTimezoneInput`<sup>Optional</sup> <a name="scheduleTimezoneInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezoneInput"></a>

```java
public java.lang.String getScheduleTimezoneInput();
```

- *Type:* java.lang.String

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDateInput"></a>

```java
public java.lang.String getStartDateInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowUnassociatedTargets`<sup>Required</sup> <a name="allowUnassociatedTargets" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargets"></a>

```java
public java.lang.Boolean|IResolvable getAllowUnassociatedTargets();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cutoff`<sup>Required</sup> <a name="cutoff" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoff"></a>

```java
public java.lang.Number getCutoff();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `scheduleOffset`<sup>Required</sup> <a name="scheduleOffset" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffset"></a>

```java
public java.lang.Number getScheduleOffset();
```

- *Type:* java.lang.Number

---

##### `scheduleTimezone`<sup>Required</sup> <a name="scheduleTimezone" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezone"></a>

```java
public java.lang.String getScheduleTimezone();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmMaintenanceWindowConfig <a name="SsmMaintenanceWindowConfig" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ssm_maintenance_window.SsmMaintenanceWindowConfig;

SsmMaintenanceWindowConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cutoff(java.lang.Number)
    .duration(java.lang.Number)
    .name(java.lang.String)
    .schedule(java.lang.String)
//  .allowUnassociatedTargets(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .endDate(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .scheduleOffset(java.lang.Number)
//  .scheduleTimezone(java.lang.String)
//  .startDate(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.cutoff">cutoff</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#cutoff SsmMaintenanceWindow#cutoff}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.duration">duration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#duration SsmMaintenanceWindow#duration}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#name SsmMaintenanceWindow#name}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#schedule SsmMaintenanceWindow#schedule}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.allowUnassociatedTargets">allowUnassociatedTargets</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#description SsmMaintenanceWindow#description}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#enabled SsmMaintenanceWindow#enabled}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.endDate">endDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#end_date SsmMaintenanceWindow#end_date}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#id SsmMaintenanceWindow#id}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleOffset">scheduleOffset</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#schedule_offset SsmMaintenanceWindow#schedule_offset}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleTimezone">scheduleTimezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#schedule_timezone SsmMaintenanceWindow#schedule_timezone}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.startDate">startDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#start_date SsmMaintenanceWindow#start_date}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#tags SsmMaintenanceWindow#tags}. |
| <code><a href="#@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#tags_all SsmMaintenanceWindow#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cutoff`<sup>Required</sup> <a name="cutoff" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.cutoff"></a>

```java
public java.lang.Number getCutoff();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#cutoff SsmMaintenanceWindow#cutoff}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#duration SsmMaintenanceWindow#duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#name SsmMaintenanceWindow#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#schedule SsmMaintenanceWindow#schedule}.

---

##### `allowUnassociatedTargets`<sup>Optional</sup> <a name="allowUnassociatedTargets" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.allowUnassociatedTargets"></a>

```java
public java.lang.Boolean|IResolvable getAllowUnassociatedTargets();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#description SsmMaintenanceWindow#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#enabled SsmMaintenanceWindow#enabled}.

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#end_date SsmMaintenanceWindow#end_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#id SsmMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#region SsmMaintenanceWindow#region}

---

##### `scheduleOffset`<sup>Optional</sup> <a name="scheduleOffset" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleOffset"></a>

```java
public java.lang.Number getScheduleOffset();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#schedule_offset SsmMaintenanceWindow#schedule_offset}.

---

##### `scheduleTimezone`<sup>Optional</sup> <a name="scheduleTimezone" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleTimezone"></a>

```java
public java.lang.String getScheduleTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#schedule_timezone SsmMaintenanceWindow#schedule_timezone}.

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#start_date SsmMaintenanceWindow#start_date}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#tags SsmMaintenanceWindow#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ssm_maintenance_window#tags_all SsmMaintenanceWindow#tags_all}.

---




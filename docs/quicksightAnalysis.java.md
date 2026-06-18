# `quicksightAnalysis` Submodule <a name="`quicksightAnalysis` Submodule" id="@cdktn/provider-aws.quicksightAnalysis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightAnalysis <a name="QuicksightAnalysis" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis aws_quicksight_analysis}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysis;

QuicksightAnalysis.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .analysisId(java.lang.String)
    .name(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .definition(java.lang.Object)
//  .id(java.lang.String)
//  .parameters(QuicksightAnalysisParameters)
//  .permissions(IResolvable|java.util.List<QuicksightAnalysisPermissions>)
//  .recoveryWindowInDays(java.lang.Number)
//  .region(java.lang.String)
//  .sourceEntity(QuicksightAnalysisSourceEntity)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .themeArn(java.lang.String)
//  .timeouts(QuicksightAnalysisTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.analysisId">analysisId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#analysis_id QuicksightAnalysis#analysis_id}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#aws_account_id QuicksightAnalysis#aws_account_id}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.definition">definition</a></code> | <code>java.lang.Object</code> | definition block. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#id QuicksightAnalysis#id}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a></code> | parameters block. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.permissions">permissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>></code> | permissions block. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#recovery_window_in_days QuicksightAnalysis#recovery_window_in_days}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a></code> | source_entity block. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#tags QuicksightAnalysis#tags}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#tags_all QuicksightAnalysis#tags_all}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.themeArn">themeArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#theme_arn QuicksightAnalysis#theme_arn}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `analysisId`<sup>Required</sup> <a name="analysisId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.analysisId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#analysis_id QuicksightAnalysis#analysis_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#aws_account_id QuicksightAnalysis#aws_account_id}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.definition"></a>

- *Type:* java.lang.Object

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#definition QuicksightAnalysis#definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#id QuicksightAnalysis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.parameters"></a>

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#parameters QuicksightAnalysis#parameters}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.permissions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#permissions QuicksightAnalysis#permissions}

---

##### `recoveryWindowInDays`<sup>Optional</sup> <a name="recoveryWindowInDays" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.recoveryWindowInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#recovery_window_in_days QuicksightAnalysis#recovery_window_in_days}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#region QuicksightAnalysis#region}

---

##### `sourceEntity`<sup>Optional</sup> <a name="sourceEntity" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.sourceEntity"></a>

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

source_entity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#source_entity QuicksightAnalysis#source_entity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#tags QuicksightAnalysis#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#tags_all QuicksightAnalysis#tags_all}.

---

##### `themeArn`<sup>Optional</sup> <a name="themeArn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.themeArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#theme_arn QuicksightAnalysis#theme_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#timeouts QuicksightAnalysis#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.putSourceEntity">putSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetRecoveryWindowInDays">resetRecoveryWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetSourceEntity">resetSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetThemeArn">resetThemeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.putParameters"></a>

```java
public void putParameters(QuicksightAnalysisParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

---

##### `putPermissions` <a name="putPermissions" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.putPermissions"></a>

```java
public void putPermissions(IResolvable|java.util.List<QuicksightAnalysisPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.putPermissions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>>

---

##### `putSourceEntity` <a name="putSourceEntity" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.putSourceEntity"></a>

```java
public void putSourceEntity(QuicksightAnalysisSourceEntity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.putSourceEntity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.putTimeouts"></a>

```java
public void putTimeouts(QuicksightAnalysisTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a>

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetDefinition` <a name="resetDefinition" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetDefinition"></a>

```java
public void resetDefinition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetId"></a>

```java
public void resetId()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetRecoveryWindowInDays` <a name="resetRecoveryWindowInDays" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetRecoveryWindowInDays"></a>

```java
public void resetRecoveryWindowInDays()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSourceEntity` <a name="resetSourceEntity" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetSourceEntity"></a>

```java
public void resetSourceEntity()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetThemeArn` <a name="resetThemeArn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetThemeArn"></a>

```java
public void resetThemeArn()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightAnalysis resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.isConstruct"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysis;

QuicksightAnalysis.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysis;

QuicksightAnalysis.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysis;

QuicksightAnalysis.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysis;

QuicksightAnalysis.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightAnalysis.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QuicksightAnalysis resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightAnalysis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightAnalysis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightAnalysis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.definitionInput">definitionInput</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.lastPublishedTime">lastPublishedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference">QuicksightAnalysisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList">QuicksightAnalysisPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference">QuicksightAnalysisSourceEntityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference">QuicksightAnalysisTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.analysisIdInput">analysisIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.parametersInput">parametersInput</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.permissionsInput">permissionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.recoveryWindowInDaysInput">recoveryWindowInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.sourceEntityInput">sourceEntityInput</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.themeArnInput">themeArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.analysisId">analysisId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.definition">definition</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.themeArn">themeArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Required</sup> <a name="definitionInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.definitionInput"></a>

```java
public java.lang.Object getDefinitionInput();
```

- *Type:* java.lang.Object

---

##### `lastPublishedTime`<sup>Required</sup> <a name="lastPublishedTime" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.lastPublishedTime"></a>

```java
public java.lang.String getLastPublishedTime();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.parameters"></a>

```java
public QuicksightAnalysisParametersOutputReference getParameters();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference">QuicksightAnalysisParametersOutputReference</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.permissions"></a>

```java
public QuicksightAnalysisPermissionsList getPermissions();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList">QuicksightAnalysisPermissionsList</a>

---

##### `sourceEntity`<sup>Required</sup> <a name="sourceEntity" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.sourceEntity"></a>

```java
public QuicksightAnalysisSourceEntityOutputReference getSourceEntity();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference">QuicksightAnalysisSourceEntityOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.timeouts"></a>

```java
public QuicksightAnalysisTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference">QuicksightAnalysisTimeoutsOutputReference</a>

---

##### `analysisIdInput`<sup>Optional</sup> <a name="analysisIdInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.analysisIdInput"></a>

```java
public java.lang.String getAnalysisIdInput();
```

- *Type:* java.lang.String

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.parametersInput"></a>

```java
public QuicksightAnalysisParameters getParametersInput();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.permissionsInput"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisPermissions> getPermissionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>>

---

##### `recoveryWindowInDaysInput`<sup>Optional</sup> <a name="recoveryWindowInDaysInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.recoveryWindowInDaysInput"></a>

```java
public java.lang.Number getRecoveryWindowInDaysInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sourceEntityInput`<sup>Optional</sup> <a name="sourceEntityInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.sourceEntityInput"></a>

```java
public QuicksightAnalysisSourceEntity getSourceEntityInput();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `themeArnInput`<sup>Optional</sup> <a name="themeArnInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.themeArnInput"></a>

```java
public java.lang.String getThemeArnInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.timeoutsInput"></a>

```java
public IResolvable|QuicksightAnalysisTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a>

---

##### `analysisId`<sup>Required</sup> <a name="analysisId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.analysisId"></a>

```java
public java.lang.String getAnalysisId();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.definition"></a>

```java
public java.lang.Object getDefinition();
```

- *Type:* java.lang.Object

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.recoveryWindowInDays"></a>

```java
public java.lang.Number getRecoveryWindowInDays();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `themeArn`<sup>Required</sup> <a name="themeArn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.themeArn"></a>

```java
public java.lang.String getThemeArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightAnalysisConfig <a name="QuicksightAnalysisConfig" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisConfig;

QuicksightAnalysisConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .analysisId(java.lang.String)
    .name(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .definition(java.lang.Object)
//  .id(java.lang.String)
//  .parameters(QuicksightAnalysisParameters)
//  .permissions(IResolvable|java.util.List<QuicksightAnalysisPermissions>)
//  .recoveryWindowInDays(java.lang.Number)
//  .region(java.lang.String)
//  .sourceEntity(QuicksightAnalysisSourceEntity)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .themeArn(java.lang.String)
//  .timeouts(QuicksightAnalysisTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.analysisId">analysisId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#analysis_id QuicksightAnalysis#analysis_id}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#aws_account_id QuicksightAnalysis#aws_account_id}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.definition">definition</a></code> | <code>java.lang.Object</code> | definition block. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#id QuicksightAnalysis#id}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a></code> | parameters block. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.permissions">permissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>></code> | permissions block. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#recovery_window_in_days QuicksightAnalysis#recovery_window_in_days}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a></code> | source_entity block. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#tags QuicksightAnalysis#tags}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#tags_all QuicksightAnalysis#tags_all}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.themeArn">themeArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#theme_arn QuicksightAnalysis#theme_arn}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `analysisId`<sup>Required</sup> <a name="analysisId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.analysisId"></a>

```java
public java.lang.String getAnalysisId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#analysis_id QuicksightAnalysis#analysis_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#aws_account_id QuicksightAnalysis#aws_account_id}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.definition"></a>

```java
public java.lang.Object getDefinition();
```

- *Type:* java.lang.Object

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#definition QuicksightAnalysis#definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#id QuicksightAnalysis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.parameters"></a>

```java
public QuicksightAnalysisParameters getParameters();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#parameters QuicksightAnalysis#parameters}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.permissions"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisPermissions> getPermissions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#permissions QuicksightAnalysis#permissions}

---

##### `recoveryWindowInDays`<sup>Optional</sup> <a name="recoveryWindowInDays" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.recoveryWindowInDays"></a>

```java
public java.lang.Number getRecoveryWindowInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#recovery_window_in_days QuicksightAnalysis#recovery_window_in_days}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#region QuicksightAnalysis#region}

---

##### `sourceEntity`<sup>Optional</sup> <a name="sourceEntity" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.sourceEntity"></a>

```java
public QuicksightAnalysisSourceEntity getSourceEntity();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

source_entity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#source_entity QuicksightAnalysis#source_entity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#tags QuicksightAnalysis#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#tags_all QuicksightAnalysis#tags_all}.

---

##### `themeArn`<sup>Optional</sup> <a name="themeArn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.themeArn"></a>

```java
public java.lang.String getThemeArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#theme_arn QuicksightAnalysis#theme_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.timeouts"></a>

```java
public QuicksightAnalysisTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#timeouts QuicksightAnalysis#timeouts}

---

### QuicksightAnalysisParameters <a name="QuicksightAnalysisParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisParameters;

QuicksightAnalysisParameters.builder()
//  .dateTimeParameters(IResolvable|java.util.List<QuicksightAnalysisParametersDateTimeParameters>)
//  .decimalParameters(IResolvable|java.util.List<QuicksightAnalysisParametersDecimalParameters>)
//  .integerParameters(IResolvable|java.util.List<QuicksightAnalysisParametersIntegerParameters>)
//  .stringParameters(IResolvable|java.util.List<QuicksightAnalysisParametersStringParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.dateTimeParameters">dateTimeParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>></code> | date_time_parameters block. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.decimalParameters">decimalParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>></code> | decimal_parameters block. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.integerParameters">integerParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>></code> | integer_parameters block. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.stringParameters">stringParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>></code> | string_parameters block. |

---

##### `dateTimeParameters`<sup>Optional</sup> <a name="dateTimeParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.dateTimeParameters"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersDateTimeParameters> getDateTimeParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>>

date_time_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#date_time_parameters QuicksightAnalysis#date_time_parameters}

---

##### `decimalParameters`<sup>Optional</sup> <a name="decimalParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.decimalParameters"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersDecimalParameters> getDecimalParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>>

decimal_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#decimal_parameters QuicksightAnalysis#decimal_parameters}

---

##### `integerParameters`<sup>Optional</sup> <a name="integerParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.integerParameters"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersIntegerParameters> getIntegerParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>>

integer_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#integer_parameters QuicksightAnalysis#integer_parameters}

---

##### `stringParameters`<sup>Optional</sup> <a name="stringParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.stringParameters"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersStringParameters> getStringParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>>

string_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#string_parameters QuicksightAnalysis#string_parameters}

---

### QuicksightAnalysisParametersDateTimeParameters <a name="QuicksightAnalysisParametersDateTimeParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisParametersDateTimeParameters;

QuicksightAnalysisParametersDateTimeParameters.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}.

---

### QuicksightAnalysisParametersDecimalParameters <a name="QuicksightAnalysisParametersDecimalParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisParametersDecimalParameters;

QuicksightAnalysisParametersDecimalParameters.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}.

---

### QuicksightAnalysisParametersIntegerParameters <a name="QuicksightAnalysisParametersIntegerParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisParametersIntegerParameters;

QuicksightAnalysisParametersIntegerParameters.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}.

---

### QuicksightAnalysisParametersStringParameters <a name="QuicksightAnalysisParametersStringParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisParametersStringParameters;

QuicksightAnalysisParametersStringParameters.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}.

---

### QuicksightAnalysisPermissions <a name="QuicksightAnalysisPermissions" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisPermissions;

QuicksightAnalysisPermissions.builder()
    .actions(java.util.List<java.lang.String>)
    .principal(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#actions QuicksightAnalysis#actions}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#principal QuicksightAnalysis#principal}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#actions QuicksightAnalysis#actions}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#principal QuicksightAnalysis#principal}.

---

### QuicksightAnalysisSourceEntity <a name="QuicksightAnalysisSourceEntity" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisSourceEntity;

QuicksightAnalysisSourceEntity.builder()
//  .sourceTemplate(QuicksightAnalysisSourceEntitySourceTemplate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity.property.sourceTemplate">sourceTemplate</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a></code> | source_template block. |

---

##### `sourceTemplate`<sup>Optional</sup> <a name="sourceTemplate" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity.property.sourceTemplate"></a>

```java
public QuicksightAnalysisSourceEntitySourceTemplate getSourceTemplate();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a>

source_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#source_template QuicksightAnalysis#source_template}

---

### QuicksightAnalysisSourceEntitySourceTemplate <a name="QuicksightAnalysisSourceEntitySourceTemplate" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisSourceEntitySourceTemplate;

QuicksightAnalysisSourceEntitySourceTemplate.builder()
    .arn(java.lang.String)
    .dataSetReferences(IResolvable|java.util.List<QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#arn QuicksightAnalysis#arn}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.dataSetReferences">dataSetReferences</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>></code> | data_set_references block. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#arn QuicksightAnalysis#arn}.

---

##### `dataSetReferences`<sup>Required</sup> <a name="dataSetReferences" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.dataSetReferences"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences> getDataSetReferences();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>>

data_set_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#data_set_references QuicksightAnalysis#data_set_references}

---

### QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences <a name="QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences;

QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.builder()
    .dataSetArn(java.lang.String)
    .dataSetPlaceholder(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#data_set_arn QuicksightAnalysis#data_set_arn}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder">dataSetPlaceholder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#data_set_placeholder QuicksightAnalysis#data_set_placeholder}. |

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#data_set_arn QuicksightAnalysis#data_set_arn}.

---

##### `dataSetPlaceholder`<sup>Required</sup> <a name="dataSetPlaceholder" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder"></a>

```java
public java.lang.String getDataSetPlaceholder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#data_set_placeholder QuicksightAnalysis#data_set_placeholder}.

---

### QuicksightAnalysisTimeouts <a name="QuicksightAnalysisTimeouts" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisTimeouts;

QuicksightAnalysisTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#create QuicksightAnalysis#create}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#delete QuicksightAnalysis#delete}. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#update QuicksightAnalysis#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#create QuicksightAnalysis#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#delete QuicksightAnalysis#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/quicksight_analysis#update QuicksightAnalysis#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightAnalysisParametersDateTimeParametersList <a name="QuicksightAnalysisParametersDateTimeParametersList" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisParametersDateTimeParametersList;

new QuicksightAnalysisParametersDateTimeParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.get"></a>

```java
public QuicksightAnalysisParametersDateTimeParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersDateTimeParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>>

---


### QuicksightAnalysisParametersDateTimeParametersOutputReference <a name="QuicksightAnalysisParametersDateTimeParametersOutputReference" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisParametersDateTimeParametersOutputReference;

new QuicksightAnalysisParametersDateTimeParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisParametersDateTimeParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>

---


### QuicksightAnalysisParametersDecimalParametersList <a name="QuicksightAnalysisParametersDecimalParametersList" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisParametersDecimalParametersList;

new QuicksightAnalysisParametersDecimalParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.get"></a>

```java
public QuicksightAnalysisParametersDecimalParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersDecimalParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>>

---


### QuicksightAnalysisParametersDecimalParametersOutputReference <a name="QuicksightAnalysisParametersDecimalParametersOutputReference" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisParametersDecimalParametersOutputReference;

new QuicksightAnalysisParametersDecimalParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisParametersDecimalParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>

---


### QuicksightAnalysisParametersIntegerParametersList <a name="QuicksightAnalysisParametersIntegerParametersList" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisParametersIntegerParametersList;

new QuicksightAnalysisParametersIntegerParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.get"></a>

```java
public QuicksightAnalysisParametersIntegerParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersIntegerParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>>

---


### QuicksightAnalysisParametersIntegerParametersOutputReference <a name="QuicksightAnalysisParametersIntegerParametersOutputReference" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisParametersIntegerParametersOutputReference;

new QuicksightAnalysisParametersIntegerParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisParametersIntegerParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>

---


### QuicksightAnalysisParametersOutputReference <a name="QuicksightAnalysisParametersOutputReference" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisParametersOutputReference;

new QuicksightAnalysisParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDateTimeParameters">putDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDecimalParameters">putDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putIntegerParameters">putIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putStringParameters">putStringParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDateTimeParameters">resetDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDecimalParameters">resetDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetIntegerParameters">resetIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetStringParameters">resetStringParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateTimeParameters` <a name="putDateTimeParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDateTimeParameters"></a>

```java
public void putDateTimeParameters(IResolvable|java.util.List<QuicksightAnalysisParametersDateTimeParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDateTimeParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>>

---

##### `putDecimalParameters` <a name="putDecimalParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDecimalParameters"></a>

```java
public void putDecimalParameters(IResolvable|java.util.List<QuicksightAnalysisParametersDecimalParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDecimalParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>>

---

##### `putIntegerParameters` <a name="putIntegerParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putIntegerParameters"></a>

```java
public void putIntegerParameters(IResolvable|java.util.List<QuicksightAnalysisParametersIntegerParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putIntegerParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>>

---

##### `putStringParameters` <a name="putStringParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putStringParameters"></a>

```java
public void putStringParameters(IResolvable|java.util.List<QuicksightAnalysisParametersStringParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putStringParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>>

---

##### `resetDateTimeParameters` <a name="resetDateTimeParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDateTimeParameters"></a>

```java
public void resetDateTimeParameters()
```

##### `resetDecimalParameters` <a name="resetDecimalParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDecimalParameters"></a>

```java
public void resetDecimalParameters()
```

##### `resetIntegerParameters` <a name="resetIntegerParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetIntegerParameters"></a>

```java
public void resetIntegerParameters()
```

##### `resetStringParameters` <a name="resetStringParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetStringParameters"></a>

```java
public void resetStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParameters">dateTimeParameters</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList">QuicksightAnalysisParametersDateTimeParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParameters">decimalParameters</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList">QuicksightAnalysisParametersDecimalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParameters">integerParameters</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList">QuicksightAnalysisParametersIntegerParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParameters">stringParameters</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList">QuicksightAnalysisParametersStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParametersInput">dateTimeParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParametersInput">decimalParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParametersInput">integerParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParametersInput">stringParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateTimeParameters`<sup>Required</sup> <a name="dateTimeParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParameters"></a>

```java
public QuicksightAnalysisParametersDateTimeParametersList getDateTimeParameters();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList">QuicksightAnalysisParametersDateTimeParametersList</a>

---

##### `decimalParameters`<sup>Required</sup> <a name="decimalParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParameters"></a>

```java
public QuicksightAnalysisParametersDecimalParametersList getDecimalParameters();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList">QuicksightAnalysisParametersDecimalParametersList</a>

---

##### `integerParameters`<sup>Required</sup> <a name="integerParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParameters"></a>

```java
public QuicksightAnalysisParametersIntegerParametersList getIntegerParameters();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList">QuicksightAnalysisParametersIntegerParametersList</a>

---

##### `stringParameters`<sup>Required</sup> <a name="stringParameters" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParameters"></a>

```java
public QuicksightAnalysisParametersStringParametersList getStringParameters();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList">QuicksightAnalysisParametersStringParametersList</a>

---

##### `dateTimeParametersInput`<sup>Optional</sup> <a name="dateTimeParametersInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParametersInput"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersDateTimeParameters> getDateTimeParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>>

---

##### `decimalParametersInput`<sup>Optional</sup> <a name="decimalParametersInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParametersInput"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersDecimalParameters> getDecimalParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>>

---

##### `integerParametersInput`<sup>Optional</sup> <a name="integerParametersInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParametersInput"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersIntegerParameters> getIntegerParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>>

---

##### `stringParametersInput`<sup>Optional</sup> <a name="stringParametersInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParametersInput"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersStringParameters> getStringParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.internalValue"></a>

```java
public QuicksightAnalysisParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

---


### QuicksightAnalysisParametersStringParametersList <a name="QuicksightAnalysisParametersStringParametersList" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisParametersStringParametersList;

new QuicksightAnalysisParametersStringParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.get"></a>

```java
public QuicksightAnalysisParametersStringParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersStringParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>>

---


### QuicksightAnalysisParametersStringParametersOutputReference <a name="QuicksightAnalysisParametersStringParametersOutputReference" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisParametersStringParametersOutputReference;

new QuicksightAnalysisParametersStringParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisParametersStringParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>

---


### QuicksightAnalysisPermissionsList <a name="QuicksightAnalysisPermissionsList" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisPermissionsList;

new QuicksightAnalysisPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.get"></a>

```java
public QuicksightAnalysisPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisPermissions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>>

---


### QuicksightAnalysisPermissionsOutputReference <a name="QuicksightAnalysisPermissionsOutputReference" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisPermissionsOutputReference;

new QuicksightAnalysisPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisPermissions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>

---


### QuicksightAnalysisSourceEntityOutputReference <a name="QuicksightAnalysisSourceEntityOutputReference" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisSourceEntityOutputReference;

new QuicksightAnalysisSourceEntityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.putSourceTemplate">putSourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resetSourceTemplate">resetSourceTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceTemplate` <a name="putSourceTemplate" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.putSourceTemplate"></a>

```java
public void putSourceTemplate(QuicksightAnalysisSourceEntitySourceTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.putSourceTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a>

---

##### `resetSourceTemplate` <a name="resetSourceTemplate" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resetSourceTemplate"></a>

```java
public void resetSourceTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplate">sourceTemplate</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference">QuicksightAnalysisSourceEntitySourceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplateInput">sourceTemplateInput</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceTemplate`<sup>Required</sup> <a name="sourceTemplate" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplate"></a>

```java
public QuicksightAnalysisSourceEntitySourceTemplateOutputReference getSourceTemplate();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference">QuicksightAnalysisSourceEntitySourceTemplateOutputReference</a>

---

##### `sourceTemplateInput`<sup>Optional</sup> <a name="sourceTemplateInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplateInput"></a>

```java
public QuicksightAnalysisSourceEntitySourceTemplate getSourceTemplateInput();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.internalValue"></a>

```java
public QuicksightAnalysisSourceEntity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

---


### QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList <a name="QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList;

new QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get"></a>

```java
public QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>>

---


### QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference <a name="QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference;

new QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput">dataSetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput">dataSetPlaceholderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder">dataSetPlaceholder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSetArnInput`<sup>Optional</sup> <a name="dataSetArnInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput"></a>

```java
public java.lang.String getDataSetArnInput();
```

- *Type:* java.lang.String

---

##### `dataSetPlaceholderInput`<sup>Optional</sup> <a name="dataSetPlaceholderInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput"></a>

```java
public java.lang.String getDataSetPlaceholderInput();
```

- *Type:* java.lang.String

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

---

##### `dataSetPlaceholder`<sup>Required</sup> <a name="dataSetPlaceholder" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder"></a>

```java
public java.lang.String getDataSetPlaceholder();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>

---


### QuicksightAnalysisSourceEntitySourceTemplateOutputReference <a name="QuicksightAnalysisSourceEntitySourceTemplateOutputReference" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference;

new QuicksightAnalysisSourceEntitySourceTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.putDataSetReferences">putDataSetReferences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataSetReferences` <a name="putDataSetReferences" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.putDataSetReferences"></a>

```java
public void putDataSetReferences(IResolvable|java.util.List<QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.putDataSetReferences.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferences">dataSetReferences</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput">dataSetReferencesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSetReferences`<sup>Required</sup> <a name="dataSetReferences" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferences"></a>

```java
public QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList getDataSetReferences();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `dataSetReferencesInput`<sup>Optional</sup> <a name="dataSetReferencesInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences> getDataSetReferencesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.internalValue"></a>

```java
public QuicksightAnalysisSourceEntitySourceTemplate getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a>

---


### QuicksightAnalysisTimeoutsOutputReference <a name="QuicksightAnalysisTimeoutsOutputReference" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_analysis.QuicksightAnalysisTimeoutsOutputReference;

new QuicksightAnalysisTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a>

---




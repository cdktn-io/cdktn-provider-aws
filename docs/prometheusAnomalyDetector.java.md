# `prometheusAnomalyDetector` Submodule <a name="`prometheusAnomalyDetector` Submodule" id="@cdktn/provider-aws.prometheusAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusAnomalyDetector <a name="PrometheusAnomalyDetector" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector aws_prometheus_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetector;

PrometheusAnomalyDetector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .alias(java.lang.String)
    .workspaceId(java.lang.String)
//  .configuration(IResolvable|java.util.List<PrometheusAnomalyDetectorConfiguration>)
//  .evaluationIntervalInSeconds(java.lang.Number)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .missingDataAction(IResolvable|java.util.List<PrometheusAnomalyDetectorMissingDataAction>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PrometheusAnomalyDetectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#alias PrometheusAnomalyDetector#alias}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#workspace_id PrometheusAnomalyDetector#workspace_id}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.configuration">configuration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.evaluationIntervalInSeconds">evaluationIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#evaluation_interval_in_seconds PrometheusAnomalyDetector#evaluation_interval_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#labels PrometheusAnomalyDetector#labels}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.missingDataAction">missingDataAction</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>></code> | missing_data_action block. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#tags PrometheusAnomalyDetector#tags}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#alias PrometheusAnomalyDetector#alias}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#workspace_id PrometheusAnomalyDetector#workspace_id}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.configuration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#configuration PrometheusAnomalyDetector#configuration}

---

##### `evaluationIntervalInSeconds`<sup>Optional</sup> <a name="evaluationIntervalInSeconds" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.evaluationIntervalInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#evaluation_interval_in_seconds PrometheusAnomalyDetector#evaluation_interval_in_seconds}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#labels PrometheusAnomalyDetector#labels}.

---

##### `missingDataAction`<sup>Optional</sup> <a name="missingDataAction" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.missingDataAction"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>>

missing_data_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#missing_data_action PrometheusAnomalyDetector#missing_data_action}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#region PrometheusAnomalyDetector#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#tags PrometheusAnomalyDetector#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#timeouts PrometheusAnomalyDetector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putMissingDataAction">putMissingDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetEvaluationIntervalInSeconds">resetEvaluationIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetMissingDataAction">resetMissingDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putConfiguration"></a>

```java
public void putConfiguration(IResolvable|java.util.List<PrometheusAnomalyDetectorConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>>

---

##### `putMissingDataAction` <a name="putMissingDataAction" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putMissingDataAction"></a>

```java
public void putMissingDataAction(IResolvable|java.util.List<PrometheusAnomalyDetectorMissingDataAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putMissingDataAction.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putTimeouts"></a>

```java
public void putTimeouts(PrometheusAnomalyDetectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetEvaluationIntervalInSeconds` <a name="resetEvaluationIntervalInSeconds" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetEvaluationIntervalInSeconds"></a>

```java
public void resetEvaluationIntervalInSeconds()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMissingDataAction` <a name="resetMissingDataAction" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetMissingDataAction"></a>

```java
public void resetMissingDataAction()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PrometheusAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isConstruct"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetector;

PrometheusAnomalyDetector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetector;

PrometheusAnomalyDetector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetector;

PrometheusAnomalyDetector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetector;

PrometheusAnomalyDetector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrometheusAnomalyDetector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PrometheusAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrometheusAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrometheusAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PrometheusAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList">PrometheusAnomalyDetectorConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.missingDataAction">missingDataAction</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList">PrometheusAnomalyDetectorMissingDataActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference">PrometheusAnomalyDetectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.evaluationIntervalInSecondsInput">evaluationIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.missingDataActionInput">missingDataActionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.evaluationIntervalInSeconds">evaluationIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.configuration"></a>

```java
public PrometheusAnomalyDetectorConfigurationList getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList">PrometheusAnomalyDetectorConfigurationList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `missingDataAction`<sup>Required</sup> <a name="missingDataAction" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.missingDataAction"></a>

```java
public PrometheusAnomalyDetectorMissingDataActionList getMissingDataAction();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList">PrometheusAnomalyDetectorMissingDataActionList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.timeouts"></a>

```java
public PrometheusAnomalyDetectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference">PrometheusAnomalyDetectorTimeoutsOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.configurationInput"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorConfiguration> getConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>>

---

##### `evaluationIntervalInSecondsInput`<sup>Optional</sup> <a name="evaluationIntervalInSecondsInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.evaluationIntervalInSecondsInput"></a>

```java
public java.lang.Number getEvaluationIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `missingDataActionInput`<sup>Optional</sup> <a name="missingDataActionInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.missingDataActionInput"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorMissingDataAction> getMissingDataActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.timeoutsInput"></a>

```java
public IResolvable|PrometheusAnomalyDetectorTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `evaluationIntervalInSeconds`<sup>Required</sup> <a name="evaluationIntervalInSeconds" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.evaluationIntervalInSeconds"></a>

```java
public java.lang.Number getEvaluationIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusAnomalyDetectorConfig <a name="PrometheusAnomalyDetectorConfig" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorConfig;

PrometheusAnomalyDetectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .alias(java.lang.String)
    .workspaceId(java.lang.String)
//  .configuration(IResolvable|java.util.List<PrometheusAnomalyDetectorConfiguration>)
//  .evaluationIntervalInSeconds(java.lang.Number)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .missingDataAction(IResolvable|java.util.List<PrometheusAnomalyDetectorMissingDataAction>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PrometheusAnomalyDetectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#alias PrometheusAnomalyDetector#alias}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#workspace_id PrometheusAnomalyDetector#workspace_id}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.configuration">configuration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.evaluationIntervalInSeconds">evaluationIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#evaluation_interval_in_seconds PrometheusAnomalyDetector#evaluation_interval_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#labels PrometheusAnomalyDetector#labels}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.missingDataAction">missingDataAction</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>></code> | missing_data_action block. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#tags PrometheusAnomalyDetector#tags}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#alias PrometheusAnomalyDetector#alias}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#workspace_id PrometheusAnomalyDetector#workspace_id}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.configuration"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorConfiguration> getConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#configuration PrometheusAnomalyDetector#configuration}

---

##### `evaluationIntervalInSeconds`<sup>Optional</sup> <a name="evaluationIntervalInSeconds" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.evaluationIntervalInSeconds"></a>

```java
public java.lang.Number getEvaluationIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#evaluation_interval_in_seconds PrometheusAnomalyDetector#evaluation_interval_in_seconds}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#labels PrometheusAnomalyDetector#labels}.

---

##### `missingDataAction`<sup>Optional</sup> <a name="missingDataAction" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.missingDataAction"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorMissingDataAction> getMissingDataAction();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>>

missing_data_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#missing_data_action PrometheusAnomalyDetector#missing_data_action}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#region PrometheusAnomalyDetector#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#tags PrometheusAnomalyDetector#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.timeouts"></a>

```java
public PrometheusAnomalyDetectorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#timeouts PrometheusAnomalyDetector#timeouts}

---

### PrometheusAnomalyDetectorConfiguration <a name="PrometheusAnomalyDetectorConfiguration" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorConfiguration;

PrometheusAnomalyDetectorConfiguration.builder()
//  .randomCutForest(IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForest>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration.property.randomCutForest">randomCutForest</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>></code> | random_cut_forest block. |

---

##### `randomCutForest`<sup>Optional</sup> <a name="randomCutForest" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration.property.randomCutForest"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForest> getRandomCutForest();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>>

random_cut_forest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#random_cut_forest PrometheusAnomalyDetector#random_cut_forest}

---

### PrometheusAnomalyDetectorConfigurationRandomCutForest <a name="PrometheusAnomalyDetectorConfigurationRandomCutForest" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorConfigurationRandomCutForest;

PrometheusAnomalyDetectorConfigurationRandomCutForest.builder()
    .query(java.lang.String)
//  .ignoreNearExpectedFromAbove(IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove>)
//  .ignoreNearExpectedFromBelow(IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow>)
//  .sampleSize(java.lang.Number)
//  .shingleSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#query PrometheusAnomalyDetector#query}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromAbove">ignoreNearExpectedFromAbove</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>></code> | ignore_near_expected_from_above block. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromBelow">ignoreNearExpectedFromBelow</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>></code> | ignore_near_expected_from_below block. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.sampleSize">sampleSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#sample_size PrometheusAnomalyDetector#sample_size}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.shingleSize">shingleSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#shingle_size PrometheusAnomalyDetector#shingle_size}. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#query PrometheusAnomalyDetector#query}.

---

##### `ignoreNearExpectedFromAbove`<sup>Optional</sup> <a name="ignoreNearExpectedFromAbove" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromAbove"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove> getIgnoreNearExpectedFromAbove();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>>

ignore_near_expected_from_above block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#ignore_near_expected_from_above PrometheusAnomalyDetector#ignore_near_expected_from_above}

---

##### `ignoreNearExpectedFromBelow`<sup>Optional</sup> <a name="ignoreNearExpectedFromBelow" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromBelow"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow> getIgnoreNearExpectedFromBelow();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>>

ignore_near_expected_from_below block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#ignore_near_expected_from_below PrometheusAnomalyDetector#ignore_near_expected_from_below}

---

##### `sampleSize`<sup>Optional</sup> <a name="sampleSize" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.sampleSize"></a>

```java
public java.lang.Number getSampleSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#sample_size PrometheusAnomalyDetector#sample_size}.

---

##### `shingleSize`<sup>Optional</sup> <a name="shingleSize" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.shingleSize"></a>

```java
public java.lang.Number getShingleSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#shingle_size PrometheusAnomalyDetector#shingle_size}.

---

### PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove;

PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.builder()
//  .amount(java.lang.Number)
//  .ratio(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.amount">amount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#amount PrometheusAnomalyDetector#amount}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.ratio">ratio</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#ratio PrometheusAnomalyDetector#ratio}. |

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#amount PrometheusAnomalyDetector#amount}.

---

##### `ratio`<sup>Optional</sup> <a name="ratio" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.ratio"></a>

```java
public java.lang.Number getRatio();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#ratio PrometheusAnomalyDetector#ratio}.

---

### PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow;

PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.builder()
//  .amount(java.lang.Number)
//  .ratio(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.amount">amount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#amount PrometheusAnomalyDetector#amount}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.ratio">ratio</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#ratio PrometheusAnomalyDetector#ratio}. |

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#amount PrometheusAnomalyDetector#amount}.

---

##### `ratio`<sup>Optional</sup> <a name="ratio" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.ratio"></a>

```java
public java.lang.Number getRatio();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#ratio PrometheusAnomalyDetector#ratio}.

---

### PrometheusAnomalyDetectorMissingDataAction <a name="PrometheusAnomalyDetectorMissingDataAction" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorMissingDataAction;

PrometheusAnomalyDetectorMissingDataAction.builder()
//  .markAsAnomaly(java.lang.Boolean|IResolvable)
//  .skip(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction.property.markAsAnomaly">markAsAnomaly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#mark_as_anomaly PrometheusAnomalyDetector#mark_as_anomaly}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction.property.skip">skip</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#skip PrometheusAnomalyDetector#skip}. |

---

##### `markAsAnomaly`<sup>Optional</sup> <a name="markAsAnomaly" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction.property.markAsAnomaly"></a>

```java
public java.lang.Boolean|IResolvable getMarkAsAnomaly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#mark_as_anomaly PrometheusAnomalyDetector#mark_as_anomaly}.

---

##### `skip`<sup>Optional</sup> <a name="skip" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction.property.skip"></a>

```java
public java.lang.Boolean|IResolvable getSkip();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#skip PrometheusAnomalyDetector#skip}.

---

### PrometheusAnomalyDetectorTimeouts <a name="PrometheusAnomalyDetectorTimeouts" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorTimeouts;

PrometheusAnomalyDetectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#create PrometheusAnomalyDetector#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#delete PrometheusAnomalyDetector#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#update PrometheusAnomalyDetector#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PrometheusAnomalyDetectorConfigurationList <a name="PrometheusAnomalyDetectorConfigurationList" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorConfigurationList;

new PrometheusAnomalyDetectorConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.get"></a>

```java
public PrometheusAnomalyDetectorConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>>

---


### PrometheusAnomalyDetectorConfigurationOutputReference <a name="PrometheusAnomalyDetectorConfigurationOutputReference" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorConfigurationOutputReference;

new PrometheusAnomalyDetectorConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.putRandomCutForest">putRandomCutForest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.resetRandomCutForest">resetRandomCutForest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRandomCutForest` <a name="putRandomCutForest" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.putRandomCutForest"></a>

```java
public void putRandomCutForest(IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForest> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.putRandomCutForest.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>>

---

##### `resetRandomCutForest` <a name="resetRandomCutForest" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.resetRandomCutForest"></a>

```java
public void resetRandomCutForest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.randomCutForest">randomCutForest</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList">PrometheusAnomalyDetectorConfigurationRandomCutForestList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.randomCutForestInput">randomCutForestInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `randomCutForest`<sup>Required</sup> <a name="randomCutForest" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.randomCutForest"></a>

```java
public PrometheusAnomalyDetectorConfigurationRandomCutForestList getRandomCutForest();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList">PrometheusAnomalyDetectorConfigurationRandomCutForestList</a>

---

##### `randomCutForestInput`<sup>Optional</sup> <a name="randomCutForestInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.randomCutForestInput"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForest> getRandomCutForestInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusAnomalyDetectorConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>

---


### PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList;

new PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.get"></a>

```java
public PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>>

---


### PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference;

new PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetAmount">resetAmount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetRatio">resetRatio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmount` <a name="resetAmount" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetAmount"></a>

```java
public void resetAmount()
```

##### `resetRatio` <a name="resetRatio" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetRatio"></a>

```java
public void resetRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amountInput">amountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratioInput">ratioInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amount">amount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratio">ratio</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amountInput"></a>

```java
public java.lang.Number getAmountInput();
```

- *Type:* java.lang.Number

---

##### `ratioInput`<sup>Optional</sup> <a name="ratioInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratioInput"></a>

```java
public java.lang.Number getRatioInput();
```

- *Type:* java.lang.Number

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

---

##### `ratio`<sup>Required</sup> <a name="ratio" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratio"></a>

```java
public java.lang.Number getRatio();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>

---


### PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList;

new PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.get"></a>

```java
public PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>>

---


### PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference;

new PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetAmount">resetAmount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetRatio">resetRatio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmount` <a name="resetAmount" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetAmount"></a>

```java
public void resetAmount()
```

##### `resetRatio` <a name="resetRatio" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetRatio"></a>

```java
public void resetRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amountInput">amountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratioInput">ratioInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amount">amount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratio">ratio</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amountInput"></a>

```java
public java.lang.Number getAmountInput();
```

- *Type:* java.lang.Number

---

##### `ratioInput`<sup>Optional</sup> <a name="ratioInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratioInput"></a>

```java
public java.lang.Number getRatioInput();
```

- *Type:* java.lang.Number

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

---

##### `ratio`<sup>Required</sup> <a name="ratio" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratio"></a>

```java
public java.lang.Number getRatio();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>

---


### PrometheusAnomalyDetectorConfigurationRandomCutForestList <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestList" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorConfigurationRandomCutForestList;

new PrometheusAnomalyDetectorConfigurationRandomCutForestList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.get"></a>

```java
public PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForest> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>>

---


### PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference;

new PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove">putIgnoreNearExpectedFromAbove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow">putIgnoreNearExpectedFromBelow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromAbove">resetIgnoreNearExpectedFromAbove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromBelow">resetIgnoreNearExpectedFromBelow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetSampleSize">resetSampleSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetShingleSize">resetShingleSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIgnoreNearExpectedFromAbove` <a name="putIgnoreNearExpectedFromAbove" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove"></a>

```java
public void putIgnoreNearExpectedFromAbove(IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>>

---

##### `putIgnoreNearExpectedFromBelow` <a name="putIgnoreNearExpectedFromBelow" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow"></a>

```java
public void putIgnoreNearExpectedFromBelow(IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>>

---

##### `resetIgnoreNearExpectedFromAbove` <a name="resetIgnoreNearExpectedFromAbove" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromAbove"></a>

```java
public void resetIgnoreNearExpectedFromAbove()
```

##### `resetIgnoreNearExpectedFromBelow` <a name="resetIgnoreNearExpectedFromBelow" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromBelow"></a>

```java
public void resetIgnoreNearExpectedFromBelow()
```

##### `resetSampleSize` <a name="resetSampleSize" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetSampleSize"></a>

```java
public void resetSampleSize()
```

##### `resetShingleSize` <a name="resetShingleSize" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetShingleSize"></a>

```java
public void resetShingleSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAbove">ignoreNearExpectedFromAbove</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelow">ignoreNearExpectedFromBelow</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAboveInput">ignoreNearExpectedFromAboveInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelowInput">ignoreNearExpectedFromBelowInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSizeInput">sampleSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSizeInput">shingleSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSize">sampleSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSize">shingleSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ignoreNearExpectedFromAbove`<sup>Required</sup> <a name="ignoreNearExpectedFromAbove" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAbove"></a>

```java
public PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList getIgnoreNearExpectedFromAbove();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList</a>

---

##### `ignoreNearExpectedFromBelow`<sup>Required</sup> <a name="ignoreNearExpectedFromBelow" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelow"></a>

```java
public PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList getIgnoreNearExpectedFromBelow();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList</a>

---

##### `ignoreNearExpectedFromAboveInput`<sup>Optional</sup> <a name="ignoreNearExpectedFromAboveInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAboveInput"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove> getIgnoreNearExpectedFromAboveInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>>

---

##### `ignoreNearExpectedFromBelowInput`<sup>Optional</sup> <a name="ignoreNearExpectedFromBelowInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelowInput"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow> getIgnoreNearExpectedFromBelowInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `sampleSizeInput`<sup>Optional</sup> <a name="sampleSizeInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSizeInput"></a>

```java
public java.lang.Number getSampleSizeInput();
```

- *Type:* java.lang.Number

---

##### `shingleSizeInput`<sup>Optional</sup> <a name="shingleSizeInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSizeInput"></a>

```java
public java.lang.Number getShingleSizeInput();
```

- *Type:* java.lang.Number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `sampleSize`<sup>Required</sup> <a name="sampleSize" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSize"></a>

```java
public java.lang.Number getSampleSize();
```

- *Type:* java.lang.Number

---

##### `shingleSize`<sup>Required</sup> <a name="shingleSize" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSize"></a>

```java
public java.lang.Number getShingleSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForest getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>

---


### PrometheusAnomalyDetectorMissingDataActionList <a name="PrometheusAnomalyDetectorMissingDataActionList" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorMissingDataActionList;

new PrometheusAnomalyDetectorMissingDataActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.get"></a>

```java
public PrometheusAnomalyDetectorMissingDataActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrometheusAnomalyDetectorMissingDataAction> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>>

---


### PrometheusAnomalyDetectorMissingDataActionOutputReference <a name="PrometheusAnomalyDetectorMissingDataActionOutputReference" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorMissingDataActionOutputReference;

new PrometheusAnomalyDetectorMissingDataActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.resetMarkAsAnomaly">resetMarkAsAnomaly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.resetSkip">resetSkip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMarkAsAnomaly` <a name="resetMarkAsAnomaly" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.resetMarkAsAnomaly"></a>

```java
public void resetMarkAsAnomaly()
```

##### `resetSkip` <a name="resetSkip" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.resetSkip"></a>

```java
public void resetSkip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomalyInput">markAsAnomalyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.skipInput">skipInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomaly">markAsAnomaly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.skip">skip</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `markAsAnomalyInput`<sup>Optional</sup> <a name="markAsAnomalyInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomalyInput"></a>

```java
public java.lang.Boolean|IResolvable getMarkAsAnomalyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `skipInput`<sup>Optional</sup> <a name="skipInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.skipInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `markAsAnomaly`<sup>Required</sup> <a name="markAsAnomaly" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomaly"></a>

```java
public java.lang.Boolean|IResolvable getMarkAsAnomaly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.skip"></a>

```java
public java.lang.Boolean|IResolvable getSkip();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusAnomalyDetectorMissingDataAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>

---


### PrometheusAnomalyDetectorTimeoutsOutputReference <a name="PrometheusAnomalyDetectorTimeoutsOutputReference" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_anomaly_detector.PrometheusAnomalyDetectorTimeoutsOutputReference;

new PrometheusAnomalyDetectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusAnomalyDetectorTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a>

---




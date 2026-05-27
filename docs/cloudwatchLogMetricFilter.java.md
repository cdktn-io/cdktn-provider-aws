# `cloudwatchLogMetricFilter` Submodule <a name="`cloudwatchLogMetricFilter` Submodule" id="@cdktn/provider-aws.cloudwatchLogMetricFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogMetricFilter <a name="CloudwatchLogMetricFilter" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter aws_cloudwatch_log_metric_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_metric_filter.CloudwatchLogMetricFilter;

CloudwatchLogMetricFilter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .logGroupName(java.lang.String)
    .metricTransformation(CloudwatchLogMetricFilterMetricTransformation)
    .name(java.lang.String)
    .pattern(java.lang.String)
//  .applyOnTransformedLogs(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#log_group_name CloudwatchLogMetricFilter#log_group_name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.metricTransformation">metricTransformation</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a></code> | metric_transformation block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.pattern">pattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#pattern CloudwatchLogMetricFilter#pattern}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.applyOnTransformedLogs">applyOnTransformedLogs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#apply_on_transformed_logs CloudwatchLogMetricFilter#apply_on_transformed_logs}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#id CloudwatchLogMetricFilter#id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.logGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#log_group_name CloudwatchLogMetricFilter#log_group_name}.

---

##### `metricTransformation`<sup>Required</sup> <a name="metricTransformation" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.metricTransformation"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a>

metric_transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#metric_transformation CloudwatchLogMetricFilter#metric_transformation}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}.

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.pattern"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#pattern CloudwatchLogMetricFilter#pattern}.

---

##### `applyOnTransformedLogs`<sup>Optional</sup> <a name="applyOnTransformedLogs" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.applyOnTransformedLogs"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#apply_on_transformed_logs CloudwatchLogMetricFilter#apply_on_transformed_logs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#id CloudwatchLogMetricFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#region CloudwatchLogMetricFilter#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.putMetricTransformation">putMetricTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetApplyOnTransformedLogs">resetApplyOnTransformedLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetricTransformation` <a name="putMetricTransformation" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.putMetricTransformation"></a>

```java
public void putMetricTransformation(CloudwatchLogMetricFilterMetricTransformation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.putMetricTransformation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a>

---

##### `resetApplyOnTransformedLogs` <a name="resetApplyOnTransformedLogs" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetApplyOnTransformedLogs"></a>

```java
public void resetApplyOnTransformedLogs()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchLogMetricFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isConstruct"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_metric_filter.CloudwatchLogMetricFilter;

CloudwatchLogMetricFilter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_metric_filter.CloudwatchLogMetricFilter;

CloudwatchLogMetricFilter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_metric_filter.CloudwatchLogMetricFilter;

CloudwatchLogMetricFilter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_metric_filter.CloudwatchLogMetricFilter;

CloudwatchLogMetricFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudwatchLogMetricFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudwatchLogMetricFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudwatchLogMetricFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudwatchLogMetricFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchLogMetricFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.metricTransformation">metricTransformation</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference">CloudwatchLogMetricFilterMetricTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.applyOnTransformedLogsInput">applyOnTransformedLogsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.logGroupNameInput">logGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.metricTransformationInput">metricTransformationInput</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.applyOnTransformedLogs">applyOnTransformedLogs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `metricTransformation`<sup>Required</sup> <a name="metricTransformation" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.metricTransformation"></a>

```java
public CloudwatchLogMetricFilterMetricTransformationOutputReference getMetricTransformation();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference">CloudwatchLogMetricFilterMetricTransformationOutputReference</a>

---

##### `applyOnTransformedLogsInput`<sup>Optional</sup> <a name="applyOnTransformedLogsInput" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.applyOnTransformedLogsInput"></a>

```java
public java.lang.Boolean|IResolvable getApplyOnTransformedLogsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.logGroupNameInput"></a>

```java
public java.lang.String getLogGroupNameInput();
```

- *Type:* java.lang.String

---

##### `metricTransformationInput`<sup>Optional</sup> <a name="metricTransformationInput" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.metricTransformationInput"></a>

```java
public CloudwatchLogMetricFilterMetricTransformation getMetricTransformationInput();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `applyOnTransformedLogs`<sup>Required</sup> <a name="applyOnTransformedLogs" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.applyOnTransformedLogs"></a>

```java
public java.lang.Boolean|IResolvable getApplyOnTransformedLogs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogMetricFilterConfig <a name="CloudwatchLogMetricFilterConfig" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_metric_filter.CloudwatchLogMetricFilterConfig;

CloudwatchLogMetricFilterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .logGroupName(java.lang.String)
    .metricTransformation(CloudwatchLogMetricFilterMetricTransformation)
    .name(java.lang.String)
    .pattern(java.lang.String)
//  .applyOnTransformedLogs(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#log_group_name CloudwatchLogMetricFilter#log_group_name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.metricTransformation">metricTransformation</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a></code> | metric_transformation block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#pattern CloudwatchLogMetricFilter#pattern}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.applyOnTransformedLogs">applyOnTransformedLogs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#apply_on_transformed_logs CloudwatchLogMetricFilter#apply_on_transformed_logs}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#id CloudwatchLogMetricFilter#id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#log_group_name CloudwatchLogMetricFilter#log_group_name}.

---

##### `metricTransformation`<sup>Required</sup> <a name="metricTransformation" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.metricTransformation"></a>

```java
public CloudwatchLogMetricFilterMetricTransformation getMetricTransformation();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a>

metric_transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#metric_transformation CloudwatchLogMetricFilter#metric_transformation}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}.

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#pattern CloudwatchLogMetricFilter#pattern}.

---

##### `applyOnTransformedLogs`<sup>Optional</sup> <a name="applyOnTransformedLogs" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.applyOnTransformedLogs"></a>

```java
public java.lang.Boolean|IResolvable getApplyOnTransformedLogs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#apply_on_transformed_logs CloudwatchLogMetricFilter#apply_on_transformed_logs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#id CloudwatchLogMetricFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#region CloudwatchLogMetricFilter#region}

---

### CloudwatchLogMetricFilterMetricTransformation <a name="CloudwatchLogMetricFilterMetricTransformation" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_metric_filter.CloudwatchLogMetricFilterMetricTransformation;

CloudwatchLogMetricFilterMetricTransformation.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
    .value(java.lang.String)
//  .defaultValue(java.lang.String)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#namespace CloudwatchLogMetricFilter#namespace}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#value CloudwatchLogMetricFilter#value}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#default_value CloudwatchLogMetricFilter#default_value}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#dimensions CloudwatchLogMetricFilter#dimensions}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#unit CloudwatchLogMetricFilter#unit}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#namespace CloudwatchLogMetricFilter#namespace}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#value CloudwatchLogMetricFilter#value}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#default_value CloudwatchLogMetricFilter#default_value}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#dimensions CloudwatchLogMetricFilter#dimensions}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_log_metric_filter#unit CloudwatchLogMetricFilter#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogMetricFilterMetricTransformationOutputReference <a name="CloudwatchLogMetricFilterMetricTransformationOutputReference" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_metric_filter.CloudwatchLogMetricFilterMetricTransformationOutputReference;

new CloudwatchLogMetricFilterMetricTransformationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.defaultValueInput"></a>

```java
public java.lang.String getDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.dimensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.internalValue"></a>

```java
public CloudwatchLogMetricFilterMetricTransformation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a>

---




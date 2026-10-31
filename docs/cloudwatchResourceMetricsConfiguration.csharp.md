# `cloudwatchResourceMetricsConfiguration` Submodule <a name="`cloudwatchResourceMetricsConfiguration` Submodule" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchResourceMetricsConfiguration <a name="CloudwatchResourceMetricsConfiguration" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatch_resource_metrics_configuration aws_cloudwatch_resource_metrics_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchResourceMetricsConfiguration(Construct Scope, string Id, CloudwatchResourceMetricsConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig">CloudwatchResourceMetricsConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig">CloudwatchResourceMetricsConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.putMetricSelection">PutMetricSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetMetricSelection">ResetMetricSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetricSelection` <a name="PutMetricSelection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.putMetricSelection"></a>

```csharp
private void PutMetricSelection(IResolvable|CloudwatchResourceMetricsConfigurationMetricSelection[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.putMetricSelection.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>[]

---

##### `ResetMetricSelection` <a name="ResetMetricSelection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetMetricSelection"></a>

```csharp
private void ResetMetricSelection()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchResourceMetricsConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchResourceMetricsConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchResourceMetricsConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchResourceMetricsConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchResourceMetricsConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudwatchResourceMetricsConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchResourceMetricsConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchResourceMetricsConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatch_resource_metrics_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchResourceMetricsConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelection">MetricSelection</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList">CloudwatchResourceMetricsConfigurationMetricSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelectionInput">MetricSelectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MetricSelection`<sup>Required</sup> <a name="MetricSelection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelection"></a>

```csharp
public CloudwatchResourceMetricsConfigurationMetricSelectionList MetricSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList">CloudwatchResourceMetricsConfigurationMetricSelectionList</a>

---

##### `MetricSelectionInput`<sup>Optional</sup> <a name="MetricSelectionInput" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelectionInput"></a>

```csharp
public IResolvable|CloudwatchResourceMetricsConfigurationMetricSelection[] MetricSelectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchResourceMetricsConfigurationConfig <a name="CloudwatchResourceMetricsConfigurationConfig" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchResourceMetricsConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ResourceArn,
    IResolvable|CloudwatchResourceMetricsConfigurationMetricSelection[] MetricSelection = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.resourceArn">ResourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatch_resource_metrics_configuration#resource_arn CloudwatchResourceMetricsConfiguration#resource_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.metricSelection">MetricSelection</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>[]</code> | metric_selection block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatch_resource_metrics_configuration#resource_arn CloudwatchResourceMetricsConfiguration#resource_arn}.

---

##### `MetricSelection`<sup>Optional</sup> <a name="MetricSelection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.metricSelection"></a>

```csharp
public IResolvable|CloudwatchResourceMetricsConfigurationMetricSelection[] MetricSelection { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>[]

metric_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatch_resource_metrics_configuration#metric_selection CloudwatchResourceMetricsConfiguration#metric_selection}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatch_resource_metrics_configuration#region CloudwatchResourceMetricsConfiguration#region}

---

### CloudwatchResourceMetricsConfigurationMetricSelection <a name="CloudwatchResourceMetricsConfigurationMetricSelection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchResourceMetricsConfigurationMetricSelection {
    string[] IncludeMetrics
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection.property.includeMetrics">IncludeMetrics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatch_resource_metrics_configuration#include_metrics CloudwatchResourceMetricsConfiguration#include_metrics}. |

---

##### `IncludeMetrics`<sup>Required</sup> <a name="IncludeMetrics" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection.property.includeMetrics"></a>

```csharp
public string[] IncludeMetrics { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatch_resource_metrics_configuration#include_metrics CloudwatchResourceMetricsConfiguration#include_metrics}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchResourceMetricsConfigurationMetricSelectionList <a name="CloudwatchResourceMetricsConfigurationMetricSelectionList" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchResourceMetricsConfigurationMetricSelectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.get"></a>

```csharp
private CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchResourceMetricsConfigurationMetricSelection[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>[]

---


### CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference <a name="CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.includeMetricsInput">IncludeMetricsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.includeMetrics">IncludeMetrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeMetricsInput`<sup>Optional</sup> <a name="IncludeMetricsInput" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.includeMetricsInput"></a>

```csharp
public string[] IncludeMetricsInput { get; }
```

- *Type:* string[]

---

##### `IncludeMetrics`<sup>Required</sup> <a name="IncludeMetrics" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.includeMetrics"></a>

```csharp
public string[] IncludeMetrics { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchResourceMetricsConfigurationMetricSelection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>

---




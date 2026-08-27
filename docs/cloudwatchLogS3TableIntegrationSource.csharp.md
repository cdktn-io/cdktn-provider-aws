# `cloudwatchLogS3TableIntegrationSource` Submodule <a name="`cloudwatchLogS3TableIntegrationSource` Submodule" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogS3TableIntegrationSource <a name="CloudwatchLogS3TableIntegrationSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_s3_table_integration_source aws_cloudwatch_log_s3_table_integration_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchLogS3TableIntegrationSource(Construct Scope, string Id, CloudwatchLogS3TableIntegrationSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig">CloudwatchLogS3TableIntegrationSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig">CloudwatchLogS3TableIntegrationSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putDataSource">PutDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetDataSource">ResetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataSource` <a name="PutDataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putDataSource"></a>

```csharp
private void PutDataSource(IResolvable|CloudwatchLogS3TableIntegrationSourceDataSource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putDataSource.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudwatchLogS3TableIntegrationSourceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a>

---

##### `ResetDataSource` <a name="ResetDataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetDataSource"></a>

```csharp
private void ResetDataSource()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchLogS3TableIntegrationSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchLogS3TableIntegrationSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchLogS3TableIntegrationSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchLogS3TableIntegrationSource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchLogS3TableIntegrationSource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudwatchLogS3TableIntegrationSource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchLogS3TableIntegrationSource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchLogS3TableIntegrationSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_s3_table_integration_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchLogS3TableIntegrationSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSource">DataSource</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList">CloudwatchLogS3TableIntegrationSourceDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference">CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSourceInput">DataSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArnInput">IntegrationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArn">IntegrationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSource"></a>

```csharp
public CloudwatchLogS3TableIntegrationSourceDataSourceList DataSource { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList">CloudwatchLogS3TableIntegrationSourceDataSourceList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeouts"></a>

```csharp
public CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference">CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference</a>

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSourceInput"></a>

```csharp
public IResolvable|CloudwatchLogS3TableIntegrationSourceDataSource[] DataSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>[]

---

##### `IntegrationArnInput`<sup>Optional</sup> <a name="IntegrationArnInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArnInput"></a>

```csharp
public string IntegrationArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeoutsInput"></a>

```csharp
public IResolvable|CloudwatchLogS3TableIntegrationSourceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a>

---

##### `IntegrationArn`<sup>Required</sup> <a name="IntegrationArn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArn"></a>

```csharp
public string IntegrationArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogS3TableIntegrationSourceConfig <a name="CloudwatchLogS3TableIntegrationSourceConfig" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchLogS3TableIntegrationSourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IntegrationArn,
    IResolvable|CloudwatchLogS3TableIntegrationSourceDataSource[] DataSource = null,
    string Region = null,
    CloudwatchLogS3TableIntegrationSourceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.integrationArn">IntegrationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_s3_table_integration_source#integration_arn CloudwatchLogS3TableIntegrationSource#integration_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dataSource">DataSource</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>[]</code> | data_source block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IntegrationArn`<sup>Required</sup> <a name="IntegrationArn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.integrationArn"></a>

```csharp
public string IntegrationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_s3_table_integration_source#integration_arn CloudwatchLogS3TableIntegrationSource#integration_arn}.

---

##### `DataSource`<sup>Optional</sup> <a name="DataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dataSource"></a>

```csharp
public IResolvable|CloudwatchLogS3TableIntegrationSourceDataSource[] DataSource { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>[]

data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_s3_table_integration_source#data_source CloudwatchLogS3TableIntegrationSource#data_source}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_s3_table_integration_source#region CloudwatchLogS3TableIntegrationSource#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.timeouts"></a>

```csharp
public CloudwatchLogS3TableIntegrationSourceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_s3_table_integration_source#timeouts CloudwatchLogS3TableIntegrationSource#timeouts}

---

### CloudwatchLogS3TableIntegrationSourceDataSource <a name="CloudwatchLogS3TableIntegrationSourceDataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchLogS3TableIntegrationSourceDataSource {
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_s3_table_integration_source#name CloudwatchLogS3TableIntegrationSource#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_s3_table_integration_source#type CloudwatchLogS3TableIntegrationSource#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_s3_table_integration_source#name CloudwatchLogS3TableIntegrationSource#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_s3_table_integration_source#type CloudwatchLogS3TableIntegrationSource#type}.

---

### CloudwatchLogS3TableIntegrationSourceTimeouts <a name="CloudwatchLogS3TableIntegrationSourceTimeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchLogS3TableIntegrationSourceTimeouts {
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_s3_table_integration_source#delete CloudwatchLogS3TableIntegrationSource#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogS3TableIntegrationSourceDataSourceList <a name="CloudwatchLogS3TableIntegrationSourceDataSourceList" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchLogS3TableIntegrationSourceDataSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.get"></a>

```csharp
private CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchLogS3TableIntegrationSourceDataSource[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>[]

---


### CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference <a name="CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchLogS3TableIntegrationSourceDataSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>

---


### CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference <a name="CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchLogS3TableIntegrationSourceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a>

---




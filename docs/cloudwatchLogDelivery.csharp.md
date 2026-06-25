# `cloudwatchLogDelivery` Submodule <a name="`cloudwatchLogDelivery` Submodule" id="@cdktn/provider-aws.cloudwatchLogDelivery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogDelivery <a name="CloudwatchLogDelivery" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery aws_cloudwatch_log_delivery}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchLogDelivery(Construct Scope, string Id, CloudwatchLogDeliveryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig">CloudwatchLogDeliveryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig">CloudwatchLogDeliveryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.putS3DeliveryConfiguration">PutS3DeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetRecordFields">ResetRecordFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetS3DeliveryConfiguration">ResetS3DeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutS3DeliveryConfiguration` <a name="PutS3DeliveryConfiguration" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.putS3DeliveryConfiguration"></a>

```csharp
private void PutS3DeliveryConfiguration(IResolvable|CloudwatchLogDeliveryS3DeliveryConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.putS3DeliveryConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>[]

---

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetFieldDelimiter"></a>

```csharp
private void ResetFieldDelimiter()
```

##### `ResetRecordFields` <a name="ResetRecordFields" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetRecordFields"></a>

```csharp
private void ResetRecordFields()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetS3DeliveryConfiguration` <a name="ResetS3DeliveryConfiguration" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetS3DeliveryConfiguration"></a>

```csharp
private void ResetS3DeliveryConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchLogDelivery resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchLogDelivery.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchLogDelivery.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchLogDelivery.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchLogDelivery.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudwatchLogDelivery resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchLogDelivery to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchLogDelivery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchLogDelivery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.s3DeliveryConfiguration">S3DeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList">CloudwatchLogDeliveryS3DeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliveryDestinationArnInput">DeliveryDestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliverySourceNameInput">DeliverySourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.recordFieldsInput">RecordFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.s3DeliveryConfigurationInput">S3DeliveryConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliveryDestinationArn">DeliveryDestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliverySourceName">DeliverySourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.recordFields">RecordFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `S3DeliveryConfiguration`<sup>Required</sup> <a name="S3DeliveryConfiguration" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.s3DeliveryConfiguration"></a>

```csharp
public CloudwatchLogDeliveryS3DeliveryConfigurationList S3DeliveryConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList">CloudwatchLogDeliveryS3DeliveryConfigurationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DeliveryDestinationArnInput`<sup>Optional</sup> <a name="DeliveryDestinationArnInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliveryDestinationArnInput"></a>

```csharp
public string DeliveryDestinationArnInput { get; }
```

- *Type:* string

---

##### `DeliverySourceNameInput`<sup>Optional</sup> <a name="DeliverySourceNameInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliverySourceNameInput"></a>

```csharp
public string DeliverySourceNameInput { get; }
```

- *Type:* string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fieldDelimiterInput"></a>

```csharp
public string FieldDelimiterInput { get; }
```

- *Type:* string

---

##### `RecordFieldsInput`<sup>Optional</sup> <a name="RecordFieldsInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.recordFieldsInput"></a>

```csharp
public string[] RecordFieldsInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `S3DeliveryConfigurationInput`<sup>Optional</sup> <a name="S3DeliveryConfigurationInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.s3DeliveryConfigurationInput"></a>

```csharp
public IResolvable|CloudwatchLogDeliveryS3DeliveryConfiguration[] S3DeliveryConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeliveryDestinationArn`<sup>Required</sup> <a name="DeliveryDestinationArn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliveryDestinationArn"></a>

```csharp
public string DeliveryDestinationArn { get; }
```

- *Type:* string

---

##### `DeliverySourceName`<sup>Required</sup> <a name="DeliverySourceName" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliverySourceName"></a>

```csharp
public string DeliverySourceName { get; }
```

- *Type:* string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `RecordFields`<sup>Required</sup> <a name="RecordFields" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.recordFields"></a>

```csharp
public string[] RecordFields { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogDeliveryConfig <a name="CloudwatchLogDeliveryConfig" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchLogDeliveryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DeliveryDestinationArn,
    string DeliverySourceName,
    string FieldDelimiter = null,
    string[] RecordFields = null,
    string Region = null,
    IResolvable|CloudwatchLogDeliveryS3DeliveryConfiguration[] S3DeliveryConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.deliveryDestinationArn">DeliveryDestinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#delivery_destination_arn CloudwatchLogDelivery#delivery_destination_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.deliverySourceName">DeliverySourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#delivery_source_name CloudwatchLogDelivery#delivery_source_name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#field_delimiter CloudwatchLogDelivery#field_delimiter}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.recordFields">RecordFields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#record_fields CloudwatchLogDelivery#record_fields}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.s3DeliveryConfiguration">S3DeliveryConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#s3_delivery_configuration CloudwatchLogDelivery#s3_delivery_configuration}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#tags CloudwatchLogDelivery#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeliveryDestinationArn`<sup>Required</sup> <a name="DeliveryDestinationArn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.deliveryDestinationArn"></a>

```csharp
public string DeliveryDestinationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#delivery_destination_arn CloudwatchLogDelivery#delivery_destination_arn}.

---

##### `DeliverySourceName`<sup>Required</sup> <a name="DeliverySourceName" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.deliverySourceName"></a>

```csharp
public string DeliverySourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#delivery_source_name CloudwatchLogDelivery#delivery_source_name}.

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#field_delimiter CloudwatchLogDelivery#field_delimiter}.

---

##### `RecordFields`<sup>Optional</sup> <a name="RecordFields" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.recordFields"></a>

```csharp
public string[] RecordFields { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#record_fields CloudwatchLogDelivery#record_fields}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#region CloudwatchLogDelivery#region}

---

##### `S3DeliveryConfiguration`<sup>Optional</sup> <a name="S3DeliveryConfiguration" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.s3DeliveryConfiguration"></a>

```csharp
public IResolvable|CloudwatchLogDeliveryS3DeliveryConfiguration[] S3DeliveryConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#s3_delivery_configuration CloudwatchLogDelivery#s3_delivery_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#tags CloudwatchLogDelivery#tags}.

---

### CloudwatchLogDeliveryS3DeliveryConfiguration <a name="CloudwatchLogDeliveryS3DeliveryConfiguration" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchLogDeliveryS3DeliveryConfiguration {
    bool|IResolvable EnableHiveCompatiblePath = null,
    string SuffixPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.property.enableHiveCompatiblePath">EnableHiveCompatiblePath</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#enable_hive_compatible_path CloudwatchLogDelivery#enable_hive_compatible_path}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.property.suffixPath">SuffixPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#suffix_path CloudwatchLogDelivery#suffix_path}. |

---

##### `EnableHiveCompatiblePath`<sup>Optional</sup> <a name="EnableHiveCompatiblePath" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.property.enableHiveCompatiblePath"></a>

```csharp
public bool|IResolvable EnableHiveCompatiblePath { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#enable_hive_compatible_path CloudwatchLogDelivery#enable_hive_compatible_path}.

---

##### `SuffixPath`<sup>Optional</sup> <a name="SuffixPath" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.property.suffixPath"></a>

```csharp
public string SuffixPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudwatch_log_delivery#suffix_path CloudwatchLogDelivery#suffix_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogDeliveryS3DeliveryConfigurationList <a name="CloudwatchLogDeliveryS3DeliveryConfigurationList" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchLogDeliveryS3DeliveryConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.get"></a>

```csharp
private CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchLogDeliveryS3DeliveryConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>[]

---


### CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference <a name="CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resetEnableHiveCompatiblePath">ResetEnableHiveCompatiblePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resetSuffixPath">ResetSuffixPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableHiveCompatiblePath` <a name="ResetEnableHiveCompatiblePath" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resetEnableHiveCompatiblePath"></a>

```csharp
private void ResetEnableHiveCompatiblePath()
```

##### `ResetSuffixPath` <a name="ResetSuffixPath" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resetSuffixPath"></a>

```csharp
private void ResetSuffixPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.enableHiveCompatiblePathInput">EnableHiveCompatiblePathInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.suffixPathInput">SuffixPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.enableHiveCompatiblePath">EnableHiveCompatiblePath</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.suffixPath">SuffixPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableHiveCompatiblePathInput`<sup>Optional</sup> <a name="EnableHiveCompatiblePathInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.enableHiveCompatiblePathInput"></a>

```csharp
public bool|IResolvable EnableHiveCompatiblePathInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SuffixPathInput`<sup>Optional</sup> <a name="SuffixPathInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.suffixPathInput"></a>

```csharp
public string SuffixPathInput { get; }
```

- *Type:* string

---

##### `EnableHiveCompatiblePath`<sup>Required</sup> <a name="EnableHiveCompatiblePath" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.enableHiveCompatiblePath"></a>

```csharp
public bool|IResolvable EnableHiveCompatiblePath { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SuffixPath`<sup>Required</sup> <a name="SuffixPath" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.suffixPath"></a>

```csharp
public string SuffixPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchLogDeliveryS3DeliveryConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>

---




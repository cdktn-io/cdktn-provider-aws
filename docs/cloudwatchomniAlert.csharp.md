# `cloudwatchomniAlert` Submodule <a name="`cloudwatchomniAlert` Submodule" id="@cdktn/provider-aws.cloudwatchomniAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchomniAlert <a name="CloudwatchomniAlert" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert aws_cloudwatchomni_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlert(Construct Scope, string Id, CloudwatchomniAlertConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig">CloudwatchomniAlertConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig">CloudwatchomniAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putNotificationRule">PutNotificationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetNotificationRule">ResetNotificationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetNotificationsEnabled">ResetNotificationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNotificationRule` <a name="PutNotificationRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putNotificationRule"></a>

```csharp
private void PutNotificationRule(IResolvable|CloudwatchomniAlertNotificationRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putNotificationRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>[]

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putRule"></a>

```csharp
private void PutRule(IResolvable|CloudwatchomniAlertRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetNotificationRule` <a name="ResetNotificationRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetNotificationRule"></a>

```csharp
private void ResetNotificationRule()
```

##### `ResetNotificationsEnabled` <a name="ResetNotificationsEnabled" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetNotificationsEnabled"></a>

```csharp
private void ResetNotificationsEnabled()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRule` <a name="ResetRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetRule"></a>

```csharp
private void ResetRule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchomniAlert resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchomniAlert.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchomniAlert.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchomniAlert.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchomniAlert.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudwatchomniAlert resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchomniAlert to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchomniAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchomniAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.alertId">AlertId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationRule">NotificationRule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList">CloudwatchomniAlertNotificationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList">CloudwatchomniAlertRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationRuleInput">NotificationRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationsEnabledInput">NotificationsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.profileIdInput">ProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.spaceIdInput">SpaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationsEnabled">NotificationsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.spaceId">SpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AlertId`<sup>Required</sup> <a name="AlertId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.alertId"></a>

```csharp
public string AlertId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `NotificationRule`<sup>Required</sup> <a name="NotificationRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationRule"></a>

```csharp
public CloudwatchomniAlertNotificationRuleList NotificationRule { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList">CloudwatchomniAlertNotificationRuleList</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.rule"></a>

```csharp
public CloudwatchomniAlertRuleList Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList">CloudwatchomniAlertRuleList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationRuleInput`<sup>Optional</sup> <a name="NotificationRuleInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationRuleInput"></a>

```csharp
public IResolvable|CloudwatchomniAlertNotificationRule[] NotificationRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>[]

---

##### `NotificationsEnabledInput`<sup>Optional</sup> <a name="NotificationsEnabledInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationsEnabledInput"></a>

```csharp
public bool|IResolvable NotificationsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.profileIdInput"></a>

```csharp
public string ProfileIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.ruleInput"></a>

```csharp
public IResolvable|CloudwatchomniAlertRule[] RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>[]

---

##### `SpaceIdInput`<sup>Optional</sup> <a name="SpaceIdInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.spaceIdInput"></a>

```csharp
public string SpaceIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationsEnabled`<sup>Required</sup> <a name="NotificationsEnabled" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationsEnabled"></a>

```csharp
public bool|IResolvable NotificationsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.spaceId"></a>

```csharp
public string SpaceId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchomniAlertConfig <a name="CloudwatchomniAlertConfig" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ProfileId,
    string SpaceId,
    string Description = null,
    IResolvable|CloudwatchomniAlertNotificationRule[] NotificationRule = null,
    bool|IResolvable NotificationsEnabled = null,
    string Region = null,
    IResolvable|CloudwatchomniAlertRule[] Rule = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#name CloudwatchomniAlert#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.profileId">ProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#profile_id CloudwatchomniAlert#profile_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.spaceId">SpaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#space_id CloudwatchomniAlert#space_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#description CloudwatchomniAlert#description}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.notificationRule">NotificationRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>[]</code> | notification_rule block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.notificationsEnabled">NotificationsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#notifications_enabled CloudwatchomniAlert#notifications_enabled}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.rule">Rule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>[]</code> | rule block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#tags CloudwatchomniAlert#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#name CloudwatchomniAlert#name}.

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.profileId"></a>

```csharp
public string ProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#profile_id CloudwatchomniAlert#profile_id}.

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.spaceId"></a>

```csharp
public string SpaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#space_id CloudwatchomniAlert#space_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#description CloudwatchomniAlert#description}.

---

##### `NotificationRule`<sup>Optional</sup> <a name="NotificationRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.notificationRule"></a>

```csharp
public IResolvable|CloudwatchomniAlertNotificationRule[] NotificationRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>[]

notification_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#notification_rule CloudwatchomniAlert#notification_rule}

---

##### `NotificationsEnabled`<sup>Optional</sup> <a name="NotificationsEnabled" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.notificationsEnabled"></a>

```csharp
public bool|IResolvable NotificationsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#notifications_enabled CloudwatchomniAlert#notifications_enabled}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#region CloudwatchomniAlert#region}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.rule"></a>

```csharp
public IResolvable|CloudwatchomniAlertRule[] Rule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#rule CloudwatchomniAlert#rule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#tags CloudwatchomniAlert#tags}.

---

### CloudwatchomniAlertNotificationRule <a name="CloudwatchomniAlertNotificationRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertNotificationRule {
    IResolvable|CloudwatchomniAlertNotificationRuleTarget[] Target = null,
    IResolvable|CloudwatchomniAlertNotificationRuleTrigger[] Trigger = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.property.target">Target</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>[]</code> | target block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.property.trigger">Trigger</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>[]</code> | trigger block. |

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.property.target"></a>

```csharp
public IResolvable|CloudwatchomniAlertNotificationRuleTarget[] Target { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>[]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#target CloudwatchomniAlert#target}

---

##### `Trigger`<sup>Optional</sup> <a name="Trigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.property.trigger"></a>

```csharp
public IResolvable|CloudwatchomniAlertNotificationRuleTrigger[] Trigger { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>[]

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#trigger CloudwatchomniAlert#trigger}

---

### CloudwatchomniAlertNotificationRuleTarget <a name="CloudwatchomniAlertNotificationRuleTarget" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertNotificationRuleTarget {
    string Arn,
    string Type,
    System.Collections.Generic.IDictionary<string, string> Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#arn CloudwatchomniAlert#arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#type CloudwatchomniAlert#type}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#metadata CloudwatchomniAlert#metadata}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#arn CloudwatchomniAlert#arn}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#type CloudwatchomniAlert#type}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#metadata CloudwatchomniAlert#metadata}.

---

### CloudwatchomniAlertNotificationRuleTrigger <a name="CloudwatchomniAlertNotificationRuleTrigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertNotificationRuleTrigger {
    string[] StateValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger.property.stateValues">StateValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#state_values CloudwatchomniAlert#state_values}. |

---

##### `StateValues`<sup>Optional</sup> <a name="StateValues" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger.property.stateValues"></a>

```csharp
public string[] StateValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#state_values CloudwatchomniAlert#state_values}.

---

### CloudwatchomniAlertRule <a name="CloudwatchomniAlertRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRule {
    IResolvable|CloudwatchomniAlertRuleTelemetryRule[] TelemetryRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule.property.telemetryRule">TelemetryRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>[]</code> | telemetry_rule block. |

---

##### `TelemetryRule`<sup>Optional</sup> <a name="TelemetryRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule.property.telemetryRule"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRule[] TelemetryRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>[]

telemetry_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#telemetry_rule CloudwatchomniAlert#telemetry_rule}

---

### CloudwatchomniAlertRuleTelemetryRule <a name="CloudwatchomniAlertRuleTelemetryRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRule {
    IResolvable|CloudwatchomniAlertRuleTelemetryRuleCondition[] Condition = null,
    IResolvable|CloudwatchomniAlertRuleTelemetryRuleEvaluation[] Evaluation = null,
    IResolvable|CloudwatchomniAlertRuleTelemetryRuleNoData[] NoData = null,
    IResolvable|CloudwatchomniAlertRuleTelemetryRuleQuery[] Query = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.condition">Condition</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>[]</code> | condition block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.evaluation">Evaluation</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>[]</code> | evaluation block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.noData">NoData</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>[]</code> | no_data block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.query">Query</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>[]</code> | query block. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.condition"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleCondition[] Condition { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#condition CloudwatchomniAlert#condition}

---

##### `Evaluation`<sup>Optional</sup> <a name="Evaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.evaluation"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleEvaluation[] Evaluation { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>[]

evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#evaluation CloudwatchomniAlert#evaluation}

---

##### `NoData`<sup>Optional</sup> <a name="NoData" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.noData"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleNoData[] NoData { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>[]

no_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#no_data CloudwatchomniAlert#no_data}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.query"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleQuery[] Query { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>[]

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#query CloudwatchomniAlert#query}

---

### CloudwatchomniAlertRuleTelemetryRuleCondition <a name="CloudwatchomniAlertRuleTelemetryRuleCondition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRuleCondition {
    string Comparator,
    string ThresholdMode,
    double CriticalThreshold = null,
    string ThresholdField = null,
    double WarningThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.comparator">Comparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#comparator CloudwatchomniAlert#comparator}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.thresholdMode">ThresholdMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#threshold_mode CloudwatchomniAlert#threshold_mode}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.criticalThreshold">CriticalThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#critical_threshold CloudwatchomniAlert#critical_threshold}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.thresholdField">ThresholdField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#threshold_field CloudwatchomniAlert#threshold_field}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.warningThreshold">WarningThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#warning_threshold CloudwatchomniAlert#warning_threshold}. |

---

##### `Comparator`<sup>Required</sup> <a name="Comparator" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.comparator"></a>

```csharp
public string Comparator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#comparator CloudwatchomniAlert#comparator}.

---

##### `ThresholdMode`<sup>Required</sup> <a name="ThresholdMode" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.thresholdMode"></a>

```csharp
public string ThresholdMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#threshold_mode CloudwatchomniAlert#threshold_mode}.

---

##### `CriticalThreshold`<sup>Optional</sup> <a name="CriticalThreshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.criticalThreshold"></a>

```csharp
public double CriticalThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#critical_threshold CloudwatchomniAlert#critical_threshold}.

---

##### `ThresholdField`<sup>Optional</sup> <a name="ThresholdField" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.thresholdField"></a>

```csharp
public string ThresholdField { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#threshold_field CloudwatchomniAlert#threshold_field}.

---

##### `WarningThreshold`<sup>Optional</sup> <a name="WarningThreshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.warningThreshold"></a>

```csharp
public double WarningThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#warning_threshold CloudwatchomniAlert#warning_threshold}.

---

### CloudwatchomniAlertRuleTelemetryRuleEvaluation <a name="CloudwatchomniAlertRuleTelemetryRuleEvaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRuleEvaluation {
    double IntervalSeconds,
    double PendingDurationSeconds = null,
    double RecoveryDurationSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#interval_seconds CloudwatchomniAlert#interval_seconds}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.pendingDurationSeconds">PendingDurationSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#pending_duration_seconds CloudwatchomniAlert#pending_duration_seconds}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.recoveryDurationSeconds">RecoveryDurationSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#recovery_duration_seconds CloudwatchomniAlert#recovery_duration_seconds}. |

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#interval_seconds CloudwatchomniAlert#interval_seconds}.

---

##### `PendingDurationSeconds`<sup>Optional</sup> <a name="PendingDurationSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.pendingDurationSeconds"></a>

```csharp
public double PendingDurationSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#pending_duration_seconds CloudwatchomniAlert#pending_duration_seconds}.

---

##### `RecoveryDurationSeconds`<sup>Optional</sup> <a name="RecoveryDurationSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.recoveryDurationSeconds"></a>

```csharp
public double RecoveryDurationSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#recovery_duration_seconds CloudwatchomniAlert#recovery_duration_seconds}.

---

### CloudwatchomniAlertRuleTelemetryRuleNoData <a name="CloudwatchomniAlertRuleTelemetryRuleNoData" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRuleNoData {
    string TreatAs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData.property.treatAs">TreatAs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#treat_as CloudwatchomniAlert#treat_as}. |

---

##### `TreatAs`<sup>Required</sup> <a name="TreatAs" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData.property.treatAs"></a>

```csharp
public string TreatAs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#treat_as CloudwatchomniAlert#treat_as}.

---

### CloudwatchomniAlertRuleTelemetryRuleQuery <a name="CloudwatchomniAlertRuleTelemetryRuleQuery" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRuleQuery {
    string Expression,
    string Language
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#expression CloudwatchomniAlert#expression}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.property.language">Language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#language CloudwatchomniAlert#language}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#expression CloudwatchomniAlert#expression}.

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#language CloudwatchomniAlert#language}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchomniAlertNotificationRuleList <a name="CloudwatchomniAlertNotificationRuleList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertNotificationRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.get"></a>

```csharp
private CloudwatchomniAlertNotificationRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertNotificationRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>[]

---


### CloudwatchomniAlertNotificationRuleOutputReference <a name="CloudwatchomniAlertNotificationRuleOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertNotificationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resetTrigger">ResetTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTarget"></a>

```csharp
private void PutTarget(IResolvable|CloudwatchomniAlertNotificationRuleTarget[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTarget.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>[]

---

##### `PutTrigger` <a name="PutTrigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTrigger"></a>

```csharp
private void PutTrigger(IResolvable|CloudwatchomniAlertNotificationRuleTrigger[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTrigger.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>[]

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetTrigger` <a name="ResetTrigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resetTrigger"></a>

```csharp
private void ResetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.target">Target</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList">CloudwatchomniAlertNotificationRuleTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList">CloudwatchomniAlertNotificationRuleTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.targetInput">TargetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.triggerInput">TriggerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.target"></a>

```csharp
public CloudwatchomniAlertNotificationRuleTargetList Target { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList">CloudwatchomniAlertNotificationRuleTargetList</a>

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.trigger"></a>

```csharp
public CloudwatchomniAlertNotificationRuleTriggerList Trigger { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList">CloudwatchomniAlertNotificationRuleTriggerList</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.targetInput"></a>

```csharp
public IResolvable|CloudwatchomniAlertNotificationRuleTarget[] TargetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>[]

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.triggerInput"></a>

```csharp
public IResolvable|CloudwatchomniAlertNotificationRuleTrigger[] TriggerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertNotificationRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>

---


### CloudwatchomniAlertNotificationRuleTargetList <a name="CloudwatchomniAlertNotificationRuleTargetList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertNotificationRuleTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.get"></a>

```csharp
private CloudwatchomniAlertNotificationRuleTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertNotificationRuleTarget[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>[]

---


### CloudwatchomniAlertNotificationRuleTargetOutputReference <a name="CloudwatchomniAlertNotificationRuleTargetOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertNotificationRuleTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertNotificationRuleTarget InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>

---


### CloudwatchomniAlertNotificationRuleTriggerList <a name="CloudwatchomniAlertNotificationRuleTriggerList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertNotificationRuleTriggerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.get"></a>

```csharp
private CloudwatchomniAlertNotificationRuleTriggerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertNotificationRuleTrigger[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>[]

---


### CloudwatchomniAlertNotificationRuleTriggerOutputReference <a name="CloudwatchomniAlertNotificationRuleTriggerOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertNotificationRuleTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resetStateValues">ResetStateValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStateValues` <a name="ResetStateValues" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resetStateValues"></a>

```csharp
private void ResetStateValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.stateValuesInput">StateValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.stateValues">StateValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StateValuesInput`<sup>Optional</sup> <a name="StateValuesInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.stateValuesInput"></a>

```csharp
public string[] StateValuesInput { get; }
```

- *Type:* string[]

---

##### `StateValues`<sup>Required</sup> <a name="StateValues" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.stateValues"></a>

```csharp
public string[] StateValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertNotificationRuleTrigger InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>

---


### CloudwatchomniAlertRuleList <a name="CloudwatchomniAlertRuleList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.get"></a>

```csharp
private CloudwatchomniAlertRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>[]

---


### CloudwatchomniAlertRuleOutputReference <a name="CloudwatchomniAlertRuleOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.putTelemetryRule">PutTelemetryRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resetTelemetryRule">ResetTelemetryRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTelemetryRule` <a name="PutTelemetryRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.putTelemetryRule"></a>

```csharp
private void PutTelemetryRule(IResolvable|CloudwatchomniAlertRuleTelemetryRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.putTelemetryRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>[]

---

##### `ResetTelemetryRule` <a name="ResetTelemetryRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resetTelemetryRule"></a>

```csharp
private void ResetTelemetryRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.telemetryRule">TelemetryRule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList">CloudwatchomniAlertRuleTelemetryRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.telemetryRuleInput">TelemetryRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TelemetryRule`<sup>Required</sup> <a name="TelemetryRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.telemetryRule"></a>

```csharp
public CloudwatchomniAlertRuleTelemetryRuleList TelemetryRule { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList">CloudwatchomniAlertRuleTelemetryRuleList</a>

---

##### `TelemetryRuleInput`<sup>Optional</sup> <a name="TelemetryRuleInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.telemetryRuleInput"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRule[] TelemetryRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>

---


### CloudwatchomniAlertRuleTelemetryRuleConditionList <a name="CloudwatchomniAlertRuleTelemetryRuleConditionList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRuleConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.get"></a>

```csharp
private CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleCondition[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>[]

---


### CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetCriticalThreshold">ResetCriticalThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetThresholdField">ResetThresholdField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetWarningThreshold">ResetWarningThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCriticalThreshold` <a name="ResetCriticalThreshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetCriticalThreshold"></a>

```csharp
private void ResetCriticalThreshold()
```

##### `ResetThresholdField` <a name="ResetThresholdField" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetThresholdField"></a>

```csharp
private void ResetThresholdField()
```

##### `ResetWarningThreshold` <a name="ResetWarningThreshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetWarningThreshold"></a>

```csharp
private void ResetWarningThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.comparatorInput">ComparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.criticalThresholdInput">CriticalThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdFieldInput">ThresholdFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdModeInput">ThresholdModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.warningThresholdInput">WarningThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.comparator">Comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold">CriticalThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField">ThresholdField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode">ThresholdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold">WarningThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparatorInput`<sup>Optional</sup> <a name="ComparatorInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.comparatorInput"></a>

```csharp
public string ComparatorInput { get; }
```

- *Type:* string

---

##### `CriticalThresholdInput`<sup>Optional</sup> <a name="CriticalThresholdInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.criticalThresholdInput"></a>

```csharp
public double CriticalThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdFieldInput`<sup>Optional</sup> <a name="ThresholdFieldInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdFieldInput"></a>

```csharp
public string ThresholdFieldInput { get; }
```

- *Type:* string

---

##### `ThresholdModeInput`<sup>Optional</sup> <a name="ThresholdModeInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdModeInput"></a>

```csharp
public string ThresholdModeInput { get; }
```

- *Type:* string

---

##### `WarningThresholdInput`<sup>Optional</sup> <a name="WarningThresholdInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.warningThresholdInput"></a>

```csharp
public double WarningThresholdInput { get; }
```

- *Type:* double

---

##### `Comparator`<sup>Required</sup> <a name="Comparator" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.comparator"></a>

```csharp
public string Comparator { get; }
```

- *Type:* string

---

##### `CriticalThreshold`<sup>Required</sup> <a name="CriticalThreshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold"></a>

```csharp
public double CriticalThreshold { get; }
```

- *Type:* double

---

##### `ThresholdField`<sup>Required</sup> <a name="ThresholdField" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField"></a>

```csharp
public string ThresholdField { get; }
```

- *Type:* string

---

##### `ThresholdMode`<sup>Required</sup> <a name="ThresholdMode" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode"></a>

```csharp
public string ThresholdMode { get; }
```

- *Type:* string

---

##### `WarningThreshold`<sup>Required</sup> <a name="WarningThreshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold"></a>

```csharp
public double WarningThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>

---


### CloudwatchomniAlertRuleTelemetryRuleEvaluationList <a name="CloudwatchomniAlertRuleTelemetryRuleEvaluationList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRuleEvaluationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.get"></a>

```csharp
private CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleEvaluation[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>[]

---


### CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resetPendingDurationSeconds">ResetPendingDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resetRecoveryDurationSeconds">ResetRecoveryDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPendingDurationSeconds` <a name="ResetPendingDurationSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resetPendingDurationSeconds"></a>

```csharp
private void ResetPendingDurationSeconds()
```

##### `ResetRecoveryDurationSeconds` <a name="ResetRecoveryDurationSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resetRecoveryDurationSeconds"></a>

```csharp
private void ResetRecoveryDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSecondsInput">PendingDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSecondsInput">RecoveryDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds">PendingDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds">RecoveryDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `PendingDurationSecondsInput`<sup>Optional</sup> <a name="PendingDurationSecondsInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSecondsInput"></a>

```csharp
public double PendingDurationSecondsInput { get; }
```

- *Type:* double

---

##### `RecoveryDurationSecondsInput`<sup>Optional</sup> <a name="RecoveryDurationSecondsInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSecondsInput"></a>

```csharp
public double RecoveryDurationSecondsInput { get; }
```

- *Type:* double

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `PendingDurationSeconds`<sup>Required</sup> <a name="PendingDurationSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds"></a>

```csharp
public double PendingDurationSeconds { get; }
```

- *Type:* double

---

##### `RecoveryDurationSeconds`<sup>Required</sup> <a name="RecoveryDurationSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds"></a>

```csharp
public double RecoveryDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleEvaluation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>

---


### CloudwatchomniAlertRuleTelemetryRuleList <a name="CloudwatchomniAlertRuleTelemetryRuleList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.get"></a>

```csharp
private CloudwatchomniAlertRuleTelemetryRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>[]

---


### CloudwatchomniAlertRuleTelemetryRuleNoDataList <a name="CloudwatchomniAlertRuleTelemetryRuleNoDataList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRuleNoDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.get"></a>

```csharp
private CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleNoData[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>[]

---


### CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.treatAsInput">TreatAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs">TreatAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TreatAsInput`<sup>Optional</sup> <a name="TreatAsInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.treatAsInput"></a>

```csharp
public string TreatAsInput { get; }
```

- *Type:* string

---

##### `TreatAs`<sup>Required</sup> <a name="TreatAs" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs"></a>

```csharp
public string TreatAs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleNoData InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>

---


### CloudwatchomniAlertRuleTelemetryRuleOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putEvaluation">PutEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putNoData">PutNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putQuery">PutQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetEvaluation">ResetEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetNoData">ResetNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putCondition"></a>

```csharp
private void PutCondition(IResolvable|CloudwatchomniAlertRuleTelemetryRuleCondition[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>[]

---

##### `PutEvaluation` <a name="PutEvaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putEvaluation"></a>

```csharp
private void PutEvaluation(IResolvable|CloudwatchomniAlertRuleTelemetryRuleEvaluation[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putEvaluation.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>[]

---

##### `PutNoData` <a name="PutNoData" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putNoData"></a>

```csharp
private void PutNoData(IResolvable|CloudwatchomniAlertRuleTelemetryRuleNoData[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putNoData.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>[]

---

##### `PutQuery` <a name="PutQuery" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putQuery"></a>

```csharp
private void PutQuery(IResolvable|CloudwatchomniAlertRuleTelemetryRuleQuery[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putQuery.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>[]

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetEvaluation` <a name="ResetEvaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetEvaluation"></a>

```csharp
private void ResetEvaluation()
```

##### `ResetNoData` <a name="ResetNoData" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetNoData"></a>

```csharp
private void ResetNoData()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList">CloudwatchomniAlertRuleTelemetryRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.evaluation">Evaluation</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList">CloudwatchomniAlertRuleTelemetryRuleEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.noData">NoData</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList">CloudwatchomniAlertRuleTelemetryRuleNoDataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.query">Query</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList">CloudwatchomniAlertRuleTelemetryRuleQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.conditionInput">ConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.evaluationInput">EvaluationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.noDataInput">NoDataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.queryInput">QueryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.condition"></a>

```csharp
public CloudwatchomniAlertRuleTelemetryRuleConditionList Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList">CloudwatchomniAlertRuleTelemetryRuleConditionList</a>

---

##### `Evaluation`<sup>Required</sup> <a name="Evaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.evaluation"></a>

```csharp
public CloudwatchomniAlertRuleTelemetryRuleEvaluationList Evaluation { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList">CloudwatchomniAlertRuleTelemetryRuleEvaluationList</a>

---

##### `NoData`<sup>Required</sup> <a name="NoData" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.noData"></a>

```csharp
public CloudwatchomniAlertRuleTelemetryRuleNoDataList NoData { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList">CloudwatchomniAlertRuleTelemetryRuleNoDataList</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.query"></a>

```csharp
public CloudwatchomniAlertRuleTelemetryRuleQueryList Query { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList">CloudwatchomniAlertRuleTelemetryRuleQueryList</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.conditionInput"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleCondition[] ConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>[]

---

##### `EvaluationInput`<sup>Optional</sup> <a name="EvaluationInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.evaluationInput"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleEvaluation[] EvaluationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>[]

---

##### `NoDataInput`<sup>Optional</sup> <a name="NoDataInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.noDataInput"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleNoData[] NoDataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>[]

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.queryInput"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleQuery[] QueryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>

---


### CloudwatchomniAlertRuleTelemetryRuleQueryList <a name="CloudwatchomniAlertRuleTelemetryRuleQueryList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRuleQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.get"></a>

```csharp
private CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleQuery[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>[]

---


### CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniAlertRuleTelemetryRuleQuery InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>

---




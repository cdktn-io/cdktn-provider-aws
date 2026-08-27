# `lambdacoreNetworkConnector` Submodule <a name="`lambdacoreNetworkConnector` Submodule" id="@cdktn/provider-aws.lambdacoreNetworkConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdacoreNetworkConnector <a name="LambdacoreNetworkConnector" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector aws_lambdacore_network_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdacoreNetworkConnector(Construct Scope, string Id, LambdacoreNetworkConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig">LambdacoreNetworkConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig">LambdacoreNetworkConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.putConfiguration"></a>

```csharp
private void PutConfiguration(IResolvable|LambdacoreNetworkConnectorConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.putConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.putTimeouts"></a>

```csharp
private void PutTimeouts(LambdacoreNetworkConnectorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdacoreNetworkConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdacoreNetworkConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdacoreNetworkConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdacoreNetworkConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdacoreNetworkConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdacoreNetworkConnector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdacoreNetworkConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdacoreNetworkConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdacoreNetworkConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList">LambdacoreNetworkConnectorConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference">LambdacoreNetworkConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.operatorRoleInput">OperatorRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.operatorRole">OperatorRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.configuration"></a>

```csharp
public LambdacoreNetworkConnectorConfigurationList Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList">LambdacoreNetworkConnectorConfigurationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.timeouts"></a>

```csharp
public LambdacoreNetworkConnectorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference">LambdacoreNetworkConnectorTimeoutsOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.configurationInput"></a>

```csharp
public IResolvable|LambdacoreNetworkConnectorConfiguration[] ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperatorRoleInput`<sup>Optional</sup> <a name="OperatorRoleInput" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.operatorRoleInput"></a>

```csharp
public string OperatorRoleInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.timeoutsInput"></a>

```csharp
public IResolvable|LambdacoreNetworkConnectorTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OperatorRole`<sup>Required</sup> <a name="OperatorRole" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.operatorRole"></a>

```csharp
public string OperatorRole { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdacoreNetworkConnectorConfig <a name="LambdacoreNetworkConnectorConfig" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdacoreNetworkConnectorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string OperatorRole,
    IResolvable|LambdacoreNetworkConnectorConfiguration[] Configuration = null,
    string Region = null,
    LambdacoreNetworkConnectorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#name LambdacoreNetworkConnector#name}. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.operatorRole">OperatorRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#operator_role LambdacoreNetworkConnector#operator_role}. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.configuration">Configuration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>[]</code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#name LambdacoreNetworkConnector#name}.

---

##### `OperatorRole`<sup>Required</sup> <a name="OperatorRole" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.operatorRole"></a>

```csharp
public string OperatorRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#operator_role LambdacoreNetworkConnector#operator_role}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.configuration"></a>

```csharp
public IResolvable|LambdacoreNetworkConnectorConfiguration[] Configuration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>[]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#configuration LambdacoreNetworkConnector#configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#region LambdacoreNetworkConnector#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.timeouts"></a>

```csharp
public LambdacoreNetworkConnectorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#timeouts LambdacoreNetworkConnector#timeouts}

---

### LambdacoreNetworkConnectorConfiguration <a name="LambdacoreNetworkConnectorConfiguration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdacoreNetworkConnectorConfiguration {
    IResolvable|LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration[] VpcEgressConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration.property.vpcEgressConfiguration">VpcEgressConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>[]</code> | vpc_egress_configuration block. |

---

##### `VpcEgressConfiguration`<sup>Optional</sup> <a name="VpcEgressConfiguration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration.property.vpcEgressConfiguration"></a>

```csharp
public IResolvable|LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration[] VpcEgressConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>[]

vpc_egress_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#vpc_egress_configuration LambdacoreNetworkConnector#vpc_egress_configuration}

---

### LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration <a name="LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration {
    string[] AssociatedComputeResourceTypes,
    string[] SecurityGroupIds,
    string[] SubnetIds,
    string NetworkProtocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.associatedComputeResourceTypes">AssociatedComputeResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#associated_compute_resource_types LambdacoreNetworkConnector#associated_compute_resource_types}. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#security_group_ids LambdacoreNetworkConnector#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#subnet_ids LambdacoreNetworkConnector#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.networkProtocol">NetworkProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#network_protocol LambdacoreNetworkConnector#network_protocol}. |

---

##### `AssociatedComputeResourceTypes`<sup>Required</sup> <a name="AssociatedComputeResourceTypes" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.associatedComputeResourceTypes"></a>

```csharp
public string[] AssociatedComputeResourceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#associated_compute_resource_types LambdacoreNetworkConnector#associated_compute_resource_types}.

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#security_group_ids LambdacoreNetworkConnector#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#subnet_ids LambdacoreNetworkConnector#subnet_ids}.

---

##### `NetworkProtocol`<sup>Optional</sup> <a name="NetworkProtocol" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.networkProtocol"></a>

```csharp
public string NetworkProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#network_protocol LambdacoreNetworkConnector#network_protocol}.

---

### LambdacoreNetworkConnectorTimeouts <a name="LambdacoreNetworkConnectorTimeouts" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdacoreNetworkConnectorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#create LambdacoreNetworkConnector#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#delete LambdacoreNetworkConnector#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdacore_network_connector#update LambdacoreNetworkConnector#update}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdacoreNetworkConnectorConfigurationList <a name="LambdacoreNetworkConnectorConfigurationList" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdacoreNetworkConnectorConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.get"></a>

```csharp
private LambdacoreNetworkConnectorConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|LambdacoreNetworkConnectorConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>[]

---


### LambdacoreNetworkConnectorConfigurationOutputReference <a name="LambdacoreNetworkConnectorConfigurationOutputReference" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdacoreNetworkConnectorConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.putVpcEgressConfiguration">PutVpcEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.resetVpcEgressConfiguration">ResetVpcEgressConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcEgressConfiguration` <a name="PutVpcEgressConfiguration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.putVpcEgressConfiguration"></a>

```csharp
private void PutVpcEgressConfiguration(IResolvable|LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.putVpcEgressConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>[]

---

##### `ResetVpcEgressConfiguration` <a name="ResetVpcEgressConfiguration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.resetVpcEgressConfiguration"></a>

```csharp
private void ResetVpcEgressConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.vpcEgressConfiguration">VpcEgressConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList">LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.vpcEgressConfigurationInput">VpcEgressConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcEgressConfiguration`<sup>Required</sup> <a name="VpcEgressConfiguration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.vpcEgressConfiguration"></a>

```csharp
public LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList VpcEgressConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList">LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList</a>

---

##### `VpcEgressConfigurationInput`<sup>Optional</sup> <a name="VpcEgressConfigurationInput" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.vpcEgressConfigurationInput"></a>

```csharp
public IResolvable|LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration[] VpcEgressConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdacoreNetworkConnectorConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>

---


### LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList <a name="LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.get"></a>

```csharp
private LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>[]

---


### LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference <a name="LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resetNetworkProtocol">ResetNetworkProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetworkProtocol` <a name="ResetNetworkProtocol" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resetNetworkProtocol"></a>

```csharp
private void ResetNetworkProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.associatedComputeResourceTypesInput">AssociatedComputeResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.networkProtocolInput">NetworkProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.associatedComputeResourceTypes">AssociatedComputeResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.networkProtocol">NetworkProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssociatedComputeResourceTypesInput`<sup>Optional</sup> <a name="AssociatedComputeResourceTypesInput" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.associatedComputeResourceTypesInput"></a>

```csharp
public string[] AssociatedComputeResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `NetworkProtocolInput`<sup>Optional</sup> <a name="NetworkProtocolInput" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.networkProtocolInput"></a>

```csharp
public string NetworkProtocolInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `AssociatedComputeResourceTypes`<sup>Required</sup> <a name="AssociatedComputeResourceTypes" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.associatedComputeResourceTypes"></a>

```csharp
public string[] AssociatedComputeResourceTypes { get; }
```

- *Type:* string[]

---

##### `NetworkProtocol`<sup>Required</sup> <a name="NetworkProtocol" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.networkProtocol"></a>

```csharp
public string NetworkProtocol { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>

---


### LambdacoreNetworkConnectorTimeoutsOutputReference <a name="LambdacoreNetworkConnectorTimeoutsOutputReference" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdacoreNetworkConnectorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdacoreNetworkConnectorTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a>

---




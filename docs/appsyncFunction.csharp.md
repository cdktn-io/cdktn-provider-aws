# `appsyncFunction` Submodule <a name="`appsyncFunction` Submodule" id="@cdktn/provider-aws.appsyncFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncFunction <a name="AppsyncFunction" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function aws_appsync_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppsyncFunction(Construct Scope, string Id, AppsyncFunctionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig">AppsyncFunctionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig">AppsyncFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.putRuntime">PutRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.putSyncConfig">PutSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetFunctionVersion">ResetFunctionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetMaxBatchSize">ResetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetRequestMappingTemplate">ResetRequestMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetResponseMappingTemplate">ResetResponseMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetSyncConfig">ResetSyncConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRuntime` <a name="PutRuntime" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.putRuntime"></a>

```csharp
private void PutRuntime(AppsyncFunctionRuntime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.putRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

---

##### `PutSyncConfig` <a name="PutSyncConfig" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.putSyncConfig"></a>

```csharp
private void PutSyncConfig(AppsyncFunctionSyncConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

---

##### `ResetCode` <a name="ResetCode" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetCode"></a>

```csharp
private void ResetCode()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFunctionVersion` <a name="ResetFunctionVersion" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetFunctionVersion"></a>

```csharp
private void ResetFunctionVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxBatchSize` <a name="ResetMaxBatchSize" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetMaxBatchSize"></a>

```csharp
private void ResetMaxBatchSize()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRequestMappingTemplate` <a name="ResetRequestMappingTemplate" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetRequestMappingTemplate"></a>

```csharp
private void ResetRequestMappingTemplate()
```

##### `ResetResponseMappingTemplate` <a name="ResetResponseMappingTemplate" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetResponseMappingTemplate"></a>

```csharp
private void ResetResponseMappingTemplate()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetRuntime"></a>

```csharp
private void ResetRuntime()
```

##### `ResetSyncConfig` <a name="ResetSyncConfig" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.resetSyncConfig"></a>

```csharp
private void ResetSyncConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncFunction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppsyncFunction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppsyncFunction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppsyncFunction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppsyncFunction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppsyncFunction resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncFunction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.functionId">FunctionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.runtime">Runtime</a></code> | <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference">AppsyncFunctionRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfig">SyncConfig</a></code> | <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference">AppsyncFunctionSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.codeInput">CodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.dataSourceInput">DataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersionInput">FunctionVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSizeInput">MaxBatchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplateInput">RequestMappingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplateInput">ResponseMappingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.runtimeInput">RuntimeInput</a></code> | <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfigInput">SyncConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersion">FunctionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSize">MaxBatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplate">RequestMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplate">ResponseMappingTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.functionId"></a>

```csharp
public string FunctionId { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.runtime"></a>

```csharp
public AppsyncFunctionRuntimeOutputReference Runtime { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference">AppsyncFunctionRuntimeOutputReference</a>

---

##### `SyncConfig`<sup>Required</sup> <a name="SyncConfig" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfig"></a>

```csharp
public AppsyncFunctionSyncConfigOutputReference SyncConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference">AppsyncFunctionSyncConfigOutputReference</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.codeInput"></a>

```csharp
public string CodeInput { get; }
```

- *Type:* string

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.dataSourceInput"></a>

```csharp
public string DataSourceInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FunctionVersionInput`<sup>Optional</sup> <a name="FunctionVersionInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersionInput"></a>

```csharp
public string FunctionVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxBatchSizeInput`<sup>Optional</sup> <a name="MaxBatchSizeInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSizeInput"></a>

```csharp
public double MaxBatchSizeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RequestMappingTemplateInput`<sup>Optional</sup> <a name="RequestMappingTemplateInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplateInput"></a>

```csharp
public string RequestMappingTemplateInput { get; }
```

- *Type:* string

---

##### `ResponseMappingTemplateInput`<sup>Optional</sup> <a name="ResponseMappingTemplateInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplateInput"></a>

```csharp
public string ResponseMappingTemplateInput { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.runtimeInput"></a>

```csharp
public AppsyncFunctionRuntime RuntimeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

---

##### `SyncConfigInput`<sup>Optional</sup> <a name="SyncConfigInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfigInput"></a>

```csharp
public AppsyncFunctionSyncConfig SyncConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FunctionVersion`<sup>Required</sup> <a name="FunctionVersion" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersion"></a>

```csharp
public string FunctionVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxBatchSize`<sup>Required</sup> <a name="MaxBatchSize" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSize"></a>

```csharp
public double MaxBatchSize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RequestMappingTemplate`<sup>Required</sup> <a name="RequestMappingTemplate" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplate"></a>

```csharp
public string RequestMappingTemplate { get; }
```

- *Type:* string

---

##### `ResponseMappingTemplate`<sup>Required</sup> <a name="ResponseMappingTemplate" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplate"></a>

```csharp
public string ResponseMappingTemplate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncFunctionConfig <a name="AppsyncFunctionConfig" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppsyncFunctionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiId,
    string DataSource,
    string Name,
    string Code = null,
    string Description = null,
    string FunctionVersion = null,
    string Id = null,
    double MaxBatchSize = null,
    string Region = null,
    string RequestMappingTemplate = null,
    string ResponseMappingTemplate = null,
    AppsyncFunctionRuntime Runtime = null,
    AppsyncFunctionSyncConfig SyncConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.apiId">ApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#api_id AppsyncFunction#api_id}. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dataSource">DataSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#data_source AppsyncFunction#data_source}. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#name AppsyncFunction#name}. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.code">Code</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#code AppsyncFunction#code}. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#description AppsyncFunction#description}. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.functionVersion">FunctionVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#function_version AppsyncFunction#function_version}. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#id AppsyncFunction#id}. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.maxBatchSize">MaxBatchSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#max_batch_size AppsyncFunction#max_batch_size}. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.requestMappingTemplate">RequestMappingTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#request_mapping_template AppsyncFunction#request_mapping_template}. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.responseMappingTemplate">ResponseMappingTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#response_mapping_template AppsyncFunction#response_mapping_template}. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.runtime">Runtime</a></code> | <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a></code> | runtime block. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.syncConfig">SyncConfig</a></code> | <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | sync_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#api_id AppsyncFunction#api_id}.

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dataSource"></a>

```csharp
public string DataSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#data_source AppsyncFunction#data_source}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#name AppsyncFunction#name}.

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.code"></a>

```csharp
public string Code { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#code AppsyncFunction#code}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#description AppsyncFunction#description}.

---

##### `FunctionVersion`<sup>Optional</sup> <a name="FunctionVersion" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.functionVersion"></a>

```csharp
public string FunctionVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#function_version AppsyncFunction#function_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#id AppsyncFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxBatchSize`<sup>Optional</sup> <a name="MaxBatchSize" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.maxBatchSize"></a>

```csharp
public double MaxBatchSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#max_batch_size AppsyncFunction#max_batch_size}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#region AppsyncFunction#region}

---

##### `RequestMappingTemplate`<sup>Optional</sup> <a name="RequestMappingTemplate" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.requestMappingTemplate"></a>

```csharp
public string RequestMappingTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#request_mapping_template AppsyncFunction#request_mapping_template}.

---

##### `ResponseMappingTemplate`<sup>Optional</sup> <a name="ResponseMappingTemplate" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.responseMappingTemplate"></a>

```csharp
public string ResponseMappingTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#response_mapping_template AppsyncFunction#response_mapping_template}.

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.runtime"></a>

```csharp
public AppsyncFunctionRuntime Runtime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#runtime AppsyncFunction#runtime}

---

##### `SyncConfig`<sup>Optional</sup> <a name="SyncConfig" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.syncConfig"></a>

```csharp
public AppsyncFunctionSyncConfig SyncConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#sync_config AppsyncFunction#sync_config}

---

### AppsyncFunctionRuntime <a name="AppsyncFunctionRuntime" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppsyncFunctionRuntime {
    string Name,
    string RuntimeVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#name AppsyncFunction#name}. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#runtime_version AppsyncFunction#runtime_version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#name AppsyncFunction#name}.

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#runtime_version AppsyncFunction#runtime_version}.

---

### AppsyncFunctionSyncConfig <a name="AppsyncFunctionSyncConfig" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppsyncFunctionSyncConfig {
    string ConflictDetection = null,
    string ConflictHandler = null,
    AppsyncFunctionSyncConfigLambdaConflictHandlerConfig LambdaConflictHandlerConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictDetection">ConflictDetection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#conflict_detection AppsyncFunction#conflict_detection}. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictHandler">ConflictHandler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#conflict_handler AppsyncFunction#conflict_handler}. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.lambdaConflictHandlerConfig">LambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | lambda_conflict_handler_config block. |

---

##### `ConflictDetection`<sup>Optional</sup> <a name="ConflictDetection" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictDetection"></a>

```csharp
public string ConflictDetection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#conflict_detection AppsyncFunction#conflict_detection}.

---

##### `ConflictHandler`<sup>Optional</sup> <a name="ConflictHandler" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictHandler"></a>

```csharp
public string ConflictHandler { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#conflict_handler AppsyncFunction#conflict_handler}.

---

##### `LambdaConflictHandlerConfig`<sup>Optional</sup> <a name="LambdaConflictHandlerConfig" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.lambdaConflictHandlerConfig"></a>

```csharp
public AppsyncFunctionSyncConfigLambdaConflictHandlerConfig LambdaConflictHandlerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

lambda_conflict_handler_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#lambda_conflict_handler_config AppsyncFunction#lambda_conflict_handler_config}

---

### AppsyncFunctionSyncConfigLambdaConflictHandlerConfig <a name="AppsyncFunctionSyncConfigLambdaConflictHandlerConfig" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppsyncFunctionSyncConfigLambdaConflictHandlerConfig {
    string LambdaConflictHandlerArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">LambdaConflictHandlerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#lambda_conflict_handler_arn AppsyncFunction#lambda_conflict_handler_arn}. |

---

##### `LambdaConflictHandlerArn`<sup>Optional</sup> <a name="LambdaConflictHandlerArn" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```csharp
public string LambdaConflictHandlerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/appsync_function#lambda_conflict_handler_arn AppsyncFunction#lambda_conflict_handler_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncFunctionRuntimeOutputReference <a name="AppsyncFunctionRuntimeOutputReference" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppsyncFunctionRuntimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersionInput"></a>

```csharp
public string RuntimeVersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.internalValue"></a>

```csharp
public AppsyncFunctionRuntime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

---


### AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">ResetLambdaConflictHandlerArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaConflictHandlerArn` <a name="ResetLambdaConflictHandlerArn" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```csharp
private void ResetLambdaConflictHandlerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">LambdaConflictHandlerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">LambdaConflictHandlerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaConflictHandlerArnInput`<sup>Optional</sup> <a name="LambdaConflictHandlerArnInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```csharp
public string LambdaConflictHandlerArnInput { get; }
```

- *Type:* string

---

##### `LambdaConflictHandlerArn`<sup>Required</sup> <a name="LambdaConflictHandlerArn" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```csharp
public string LambdaConflictHandlerArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncFunctionSyncConfigLambdaConflictHandlerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

---


### AppsyncFunctionSyncConfigOutputReference <a name="AppsyncFunctionSyncConfigOutputReference" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppsyncFunctionSyncConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig">PutLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictDetection">ResetConflictDetection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictHandler">ResetConflictHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetLambdaConflictHandlerConfig">ResetLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambdaConflictHandlerConfig` <a name="PutLambdaConflictHandlerConfig" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```csharp
private void PutLambdaConflictHandlerConfig(AppsyncFunctionSyncConfigLambdaConflictHandlerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

---

##### `ResetConflictDetection` <a name="ResetConflictDetection" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictDetection"></a>

```csharp
private void ResetConflictDetection()
```

##### `ResetConflictHandler` <a name="ResetConflictHandler" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictHandler"></a>

```csharp
private void ResetConflictHandler()
```

##### `ResetLambdaConflictHandlerConfig` <a name="ResetLambdaConflictHandlerConfig" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```csharp
private void ResetLambdaConflictHandlerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfig">LambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetectionInput">ConflictDetectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandlerInput">ConflictHandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">LambdaConflictHandlerConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetection">ConflictDetection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandler">ConflictHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaConflictHandlerConfig`<sup>Required</sup> <a name="LambdaConflictHandlerConfig" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```csharp
public AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference LambdaConflictHandlerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `ConflictDetectionInput`<sup>Optional</sup> <a name="ConflictDetectionInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetectionInput"></a>

```csharp
public string ConflictDetectionInput { get; }
```

- *Type:* string

---

##### `ConflictHandlerInput`<sup>Optional</sup> <a name="ConflictHandlerInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandlerInput"></a>

```csharp
public string ConflictHandlerInput { get; }
```

- *Type:* string

---

##### `LambdaConflictHandlerConfigInput`<sup>Optional</sup> <a name="LambdaConflictHandlerConfigInput" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```csharp
public AppsyncFunctionSyncConfigLambdaConflictHandlerConfig LambdaConflictHandlerConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

---

##### `ConflictDetection`<sup>Required</sup> <a name="ConflictDetection" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetection"></a>

```csharp
public string ConflictDetection { get; }
```

- *Type:* string

---

##### `ConflictHandler`<sup>Required</sup> <a name="ConflictHandler" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandler"></a>

```csharp
public string ConflictHandler { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncFunctionSyncConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

---




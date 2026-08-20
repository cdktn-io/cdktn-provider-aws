# `appfabricAppAuthorizationConnection` Submodule <a name="`appfabricAppAuthorizationConnection` Submodule" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppfabricAppAuthorizationConnection <a name="AppfabricAppAuthorizationConnection" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_app_authorization_connection aws_appfabric_app_authorization_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationConnection(Construct Scope, string Id, AppfabricAppAuthorizationConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig">AppfabricAppAuthorizationConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig">AppfabricAppAuthorizationConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putAuthRequest">PutAuthRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetAuthRequest">ResetAuthRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthRequest` <a name="PutAuthRequest" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putAuthRequest"></a>

```csharp
private void PutAuthRequest(IResolvable|AppfabricAppAuthorizationConnectionAuthRequest[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putAuthRequest.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(AppfabricAppAuthorizationConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>

---

##### `ResetAuthRequest` <a name="ResetAuthRequest" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetAuthRequest"></a>

```csharp
private void ResetAuthRequest()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppfabricAppAuthorizationConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppfabricAppAuthorizationConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppfabricAppAuthorizationConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppfabricAppAuthorizationConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppfabricAppAuthorizationConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppfabricAppAuthorizationConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppfabricAppAuthorizationConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppfabricAppAuthorizationConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_app_authorization_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppfabricAppAuthorizationConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.app">App</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequest">AuthRequest</a></code> | <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList">AppfabricAppAuthorizationConnectionAuthRequestList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tenant">Tenant</a></code> | <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList">AppfabricAppAuthorizationConnectionTenantList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference">AppfabricAppAuthorizationConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArnInput">AppAuthorizationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArnInput">AppBundleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequestInput">AuthRequestInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArn">AppAuthorizationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArn">AppBundleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.app"></a>

```csharp
public string App { get; }
```

- *Type:* string

---

##### `AuthRequest`<sup>Required</sup> <a name="AuthRequest" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequest"></a>

```csharp
public AppfabricAppAuthorizationConnectionAuthRequestList AuthRequest { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList">AppfabricAppAuthorizationConnectionAuthRequestList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tenant"></a>

```csharp
public AppfabricAppAuthorizationConnectionTenantList Tenant { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList">AppfabricAppAuthorizationConnectionTenantList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeouts"></a>

```csharp
public AppfabricAppAuthorizationConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference">AppfabricAppAuthorizationConnectionTimeoutsOutputReference</a>

---

##### `AppAuthorizationArnInput`<sup>Optional</sup> <a name="AppAuthorizationArnInput" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArnInput"></a>

```csharp
public string AppAuthorizationArnInput { get; }
```

- *Type:* string

---

##### `AppBundleArnInput`<sup>Optional</sup> <a name="AppBundleArnInput" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArnInput"></a>

```csharp
public string AppBundleArnInput { get; }
```

- *Type:* string

---

##### `AuthRequestInput`<sup>Optional</sup> <a name="AuthRequestInput" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequestInput"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationConnectionAuthRequest[] AuthRequestInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeoutsInput"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationConnectionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>

---

##### `AppAuthorizationArn`<sup>Required</sup> <a name="AppAuthorizationArn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArn"></a>

```csharp
public string AppAuthorizationArn { get; }
```

- *Type:* string

---

##### `AppBundleArn`<sup>Required</sup> <a name="AppBundleArn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArn"></a>

```csharp
public string AppBundleArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppfabricAppAuthorizationConnectionAuthRequest <a name="AppfabricAppAuthorizationConnectionAuthRequest" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationConnectionAuthRequest {
    string Code,
    string RedirectUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.code">Code</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_app_authorization_connection#code AppfabricAppAuthorizationConnection#code}. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.redirectUri">RedirectUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_app_authorization_connection#redirect_uri AppfabricAppAuthorizationConnection#redirect_uri}. |

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.code"></a>

```csharp
public string Code { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_app_authorization_connection#code AppfabricAppAuthorizationConnection#code}.

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.redirectUri"></a>

```csharp
public string RedirectUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_app_authorization_connection#redirect_uri AppfabricAppAuthorizationConnection#redirect_uri}.

---

### AppfabricAppAuthorizationConnectionConfig <a name="AppfabricAppAuthorizationConnectionConfig" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AppAuthorizationArn,
    string AppBundleArn,
    IResolvable|AppfabricAppAuthorizationConnectionAuthRequest[] AuthRequest = null,
    string Region = null,
    AppfabricAppAuthorizationConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appAuthorizationArn">AppAuthorizationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_app_authorization_connection#app_authorization_arn AppfabricAppAuthorizationConnection#app_authorization_arn}. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appBundleArn">AppBundleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_app_authorization_connection#app_bundle_arn AppfabricAppAuthorizationConnection#app_bundle_arn}. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.authRequest">AuthRequest</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>[]</code> | auth_request block. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppAuthorizationArn`<sup>Required</sup> <a name="AppAuthorizationArn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appAuthorizationArn"></a>

```csharp
public string AppAuthorizationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_app_authorization_connection#app_authorization_arn AppfabricAppAuthorizationConnection#app_authorization_arn}.

---

##### `AppBundleArn`<sup>Required</sup> <a name="AppBundleArn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appBundleArn"></a>

```csharp
public string AppBundleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_app_authorization_connection#app_bundle_arn AppfabricAppAuthorizationConnection#app_bundle_arn}.

---

##### `AuthRequest`<sup>Optional</sup> <a name="AuthRequest" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.authRequest"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationConnectionAuthRequest[] AuthRequest { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>[]

auth_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_app_authorization_connection#auth_request AppfabricAppAuthorizationConnection#auth_request}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_app_authorization_connection#region AppfabricAppAuthorizationConnection#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.timeouts"></a>

```csharp
public AppfabricAppAuthorizationConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_app_authorization_connection#timeouts AppfabricAppAuthorizationConnection#timeouts}

---

### AppfabricAppAuthorizationConnectionTenant <a name="AppfabricAppAuthorizationConnectionTenant" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationConnectionTenant {

};
```


### AppfabricAppAuthorizationConnectionTimeouts <a name="AppfabricAppAuthorizationConnectionTimeouts" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationConnectionTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_app_authorization_connection#create AppfabricAppAuthorizationConnection#create}

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricAppAuthorizationConnectionAuthRequestList <a name="AppfabricAppAuthorizationConnectionAuthRequestList" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationConnectionAuthRequestList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.get"></a>

```csharp
private AppfabricAppAuthorizationConnectionAuthRequestOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.internalValue"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationConnectionAuthRequest[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>[]

---


### AppfabricAppAuthorizationConnectionAuthRequestOutputReference <a name="AppfabricAppAuthorizationConnectionAuthRequestOutputReference" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationConnectionAuthRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.codeInput">CodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUriInput">RedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUri">RedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.codeInput"></a>

```csharp
public string CodeInput { get; }
```

- *Type:* string

---

##### `RedirectUriInput`<sup>Optional</sup> <a name="RedirectUriInput" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUriInput"></a>

```csharp
public string RedirectUriInput { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUri"></a>

```csharp
public string RedirectUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationConnectionAuthRequest InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>

---


### AppfabricAppAuthorizationConnectionTenantList <a name="AppfabricAppAuthorizationConnectionTenantList" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationConnectionTenantList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.get"></a>

```csharp
private AppfabricAppAuthorizationConnectionTenantOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AppfabricAppAuthorizationConnectionTenantOutputReference <a name="AppfabricAppAuthorizationConnectionTenantOutputReference" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationConnectionTenantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantDisplayName">TenantDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantIdentifier">TenantIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant">AppfabricAppAuthorizationConnectionTenant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TenantDisplayName`<sup>Required</sup> <a name="TenantDisplayName" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantDisplayName"></a>

```csharp
public string TenantDisplayName { get; }
```

- *Type:* string

---

##### `TenantIdentifier`<sup>Required</sup> <a name="TenantIdentifier" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantIdentifier"></a>

```csharp
public string TenantIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.internalValue"></a>

```csharp
public AppfabricAppAuthorizationConnectionTenant InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant">AppfabricAppAuthorizationConnectionTenant</a>

---


### AppfabricAppAuthorizationConnectionTimeoutsOutputReference <a name="AppfabricAppAuthorizationConnectionTimeoutsOutputReference" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationConnectionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>

---




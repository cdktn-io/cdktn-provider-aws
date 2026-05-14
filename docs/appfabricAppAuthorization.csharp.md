# `appfabricAppAuthorization` Submodule <a name="`appfabricAppAuthorization` Submodule" id="@cdktn/provider-aws.appfabricAppAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppfabricAppAuthorization <a name="AppfabricAppAuthorization" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization aws_appfabric_app_authorization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorization(Construct Scope, string Id, AppfabricAppAuthorizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig">AppfabricAppAuthorizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig">AppfabricAppAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential">PutCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant">PutTenant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetCredential">ResetCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTenant">ResetTenant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCredential` <a name="PutCredential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential"></a>

```csharp
private void PutCredential(IResolvable|AppfabricAppAuthorizationCredential[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>[]

---

##### `PutTenant` <a name="PutTenant" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant"></a>

```csharp
private void PutTenant(IResolvable|AppfabricAppAuthorizationTenant[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTimeouts"></a>

```csharp
private void PutTimeouts(AppfabricAppAuthorizationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>

---

##### `ResetCredential` <a name="ResetCredential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetCredential"></a>

```csharp
private void ResetCredential()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTenant` <a name="ResetTenant" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTenant"></a>

```csharp
private void ResetTenant()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppfabricAppAuthorization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppfabricAppAuthorization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppfabricAppAuthorization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppfabricAppAuthorization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppfabricAppAuthorization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppfabricAppAuthorization resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppfabricAppAuthorization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppfabricAppAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppfabricAppAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authUrl">AuthUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credential">Credential</a></code> | <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList">AppfabricAppAuthorizationCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.persona">Persona</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenant">Tenant</a></code> | <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList">AppfabricAppAuthorizationTenantList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference">AppfabricAppAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArnInput">AppBundleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appInput">AppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credentialInput">CredentialInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenantInput">TenantInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.app">App</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArn">AppBundleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authUrl"></a>

```csharp
public string AuthUrl { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credential"></a>

```csharp
public AppfabricAppAuthorizationCredentialList Credential { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList">AppfabricAppAuthorizationCredentialList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Persona`<sup>Required</sup> <a name="Persona" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.persona"></a>

```csharp
public string Persona { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenant"></a>

```csharp
public AppfabricAppAuthorizationTenantList Tenant { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList">AppfabricAppAuthorizationTenantList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeouts"></a>

```csharp
public AppfabricAppAuthorizationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference">AppfabricAppAuthorizationTimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AppBundleArnInput`<sup>Optional</sup> <a name="AppBundleArnInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArnInput"></a>

```csharp
public string AppBundleArnInput { get; }
```

- *Type:* string

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appInput"></a>

```csharp
public string AppInput { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `CredentialInput`<sup>Optional</sup> <a name="CredentialInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credentialInput"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationCredential[] CredentialInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenantInput"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationTenant[] TenantInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeoutsInput"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.app"></a>

```csharp
public string App { get; }
```

- *Type:* string

---

##### `AppBundleArn`<sup>Required</sup> <a name="AppBundleArn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArn"></a>

```csharp
public string AppBundleArn { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppfabricAppAuthorizationConfig <a name="AppfabricAppAuthorizationConfig" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string App,
    string AppBundleArn,
    string AuthType,
    IResolvable|AppfabricAppAuthorizationCredential[] Credential = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    IResolvable|AppfabricAppAuthorizationTenant[] Tenant = null,
    AppfabricAppAuthorizationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.app">App</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.appBundleArn">AppBundleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#app_bundle_arn AppfabricAppAuthorization#app_bundle_arn}. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.authType">AuthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.credential">Credential</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>[]</code> | credential block. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tenant">Tenant</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>[]</code> | tenant block. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.app"></a>

```csharp
public string App { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}.

---

##### `AppBundleArn`<sup>Required</sup> <a name="AppBundleArn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.appBundleArn"></a>

```csharp
public string AppBundleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#app_bundle_arn AppfabricAppAuthorization#app_bundle_arn}.

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}.

---

##### `Credential`<sup>Optional</sup> <a name="Credential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.credential"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationCredential[] Credential { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>[]

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#credential AppfabricAppAuthorization#credential}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#region AppfabricAppAuthorization#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}.

---

##### `Tenant`<sup>Optional</sup> <a name="Tenant" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tenant"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationTenant[] Tenant { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>[]

tenant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#tenant AppfabricAppAuthorization#tenant}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.timeouts"></a>

```csharp
public AppfabricAppAuthorizationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#timeouts AppfabricAppAuthorization#timeouts}

---

### AppfabricAppAuthorizationCredential <a name="AppfabricAppAuthorizationCredential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationCredential {
    IResolvable|AppfabricAppAuthorizationCredentialApiKeyCredential[] ApiKeyCredential = null,
    IResolvable|AppfabricAppAuthorizationCredentialOauth2Credential[] Oauth2Credential = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.apiKeyCredential">ApiKeyCredential</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>[]</code> | api_key_credential block. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.oauth2Credential">Oauth2Credential</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>[]</code> | oauth2_credential block. |

---

##### `ApiKeyCredential`<sup>Optional</sup> <a name="ApiKeyCredential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.apiKeyCredential"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationCredentialApiKeyCredential[] ApiKeyCredential { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>[]

api_key_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#api_key_credential AppfabricAppAuthorization#api_key_credential}

---

##### `Oauth2Credential`<sup>Optional</sup> <a name="Oauth2Credential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.oauth2Credential"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationCredentialOauth2Credential[] Oauth2Credential { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>[]

oauth2_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#oauth2_credential AppfabricAppAuthorization#oauth2_credential}

---

### AppfabricAppAuthorizationCredentialApiKeyCredential <a name="AppfabricAppAuthorizationCredentialApiKeyCredential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationCredentialApiKeyCredential {
    string ApiKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.property.apiKey">ApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#api_key AppfabricAppAuthorization#api_key}. |

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#api_key AppfabricAppAuthorization#api_key}.

---

### AppfabricAppAuthorizationCredentialOauth2Credential <a name="AppfabricAppAuthorizationCredentialOauth2Credential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationCredentialOauth2Credential {
    string ClientId,
    string ClientSecret
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#client_id AppfabricAppAuthorization#client_id}. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#client_secret AppfabricAppAuthorization#client_secret}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#client_id AppfabricAppAuthorization#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#client_secret AppfabricAppAuthorization#client_secret}.

---

### AppfabricAppAuthorizationTenant <a name="AppfabricAppAuthorizationTenant" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationTenant {
    string TenantDisplayName,
    string TenantIdentifier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantDisplayName">TenantDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#tenant_display_name AppfabricAppAuthorization#tenant_display_name}. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantIdentifier">TenantIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#tenant_identifier AppfabricAppAuthorization#tenant_identifier}. |

---

##### `TenantDisplayName`<sup>Required</sup> <a name="TenantDisplayName" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantDisplayName"></a>

```csharp
public string TenantDisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#tenant_display_name AppfabricAppAuthorization#tenant_display_name}.

---

##### `TenantIdentifier`<sup>Required</sup> <a name="TenantIdentifier" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantIdentifier"></a>

```csharp
public string TenantIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#tenant_identifier AppfabricAppAuthorization#tenant_identifier}.

---

### AppfabricAppAuthorizationTimeouts <a name="AppfabricAppAuthorizationTimeouts" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#create AppfabricAppAuthorization#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#delete AppfabricAppAuthorization#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appfabric_app_authorization#update AppfabricAppAuthorization#update}

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricAppAuthorizationCredentialApiKeyCredentialList <a name="AppfabricAppAuthorizationCredentialApiKeyCredentialList" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationCredentialApiKeyCredentialList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.get"></a>

```csharp
private AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.internalValue"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationCredentialApiKeyCredential[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>[]

---


### AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference <a name="AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationCredentialApiKeyCredential InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>

---


### AppfabricAppAuthorizationCredentialList <a name="AppfabricAppAuthorizationCredentialList" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationCredentialList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.get"></a>

```csharp
private AppfabricAppAuthorizationCredentialOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.internalValue"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationCredential[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>[]

---


### AppfabricAppAuthorizationCredentialOauth2CredentialList <a name="AppfabricAppAuthorizationCredentialOauth2CredentialList" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationCredentialOauth2CredentialList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.get"></a>

```csharp
private AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.internalValue"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationCredentialOauth2Credential[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>[]

---


### AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference <a name="AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationCredentialOauth2Credential InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>

---


### AppfabricAppAuthorizationCredentialOutputReference <a name="AppfabricAppAuthorizationCredentialOutputReference" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential">PutApiKeyCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential">PutOauth2Credential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetApiKeyCredential">ResetApiKeyCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetOauth2Credential">ResetOauth2Credential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyCredential` <a name="PutApiKeyCredential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential"></a>

```csharp
private void PutApiKeyCredential(IResolvable|AppfabricAppAuthorizationCredentialApiKeyCredential[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>[]

---

##### `PutOauth2Credential` <a name="PutOauth2Credential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential"></a>

```csharp
private void PutOauth2Credential(IResolvable|AppfabricAppAuthorizationCredentialOauth2Credential[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>[]

---

##### `ResetApiKeyCredential` <a name="ResetApiKeyCredential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetApiKeyCredential"></a>

```csharp
private void ResetApiKeyCredential()
```

##### `ResetOauth2Credential` <a name="ResetOauth2Credential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetOauth2Credential"></a>

```csharp
private void ResetOauth2Credential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredential">ApiKeyCredential</a></code> | <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList">AppfabricAppAuthorizationCredentialApiKeyCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2Credential">Oauth2Credential</a></code> | <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList">AppfabricAppAuthorizationCredentialOauth2CredentialList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredentialInput">ApiKeyCredentialInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2CredentialInput">Oauth2CredentialInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyCredential`<sup>Required</sup> <a name="ApiKeyCredential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredential"></a>

```csharp
public AppfabricAppAuthorizationCredentialApiKeyCredentialList ApiKeyCredential { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList">AppfabricAppAuthorizationCredentialApiKeyCredentialList</a>

---

##### `Oauth2Credential`<sup>Required</sup> <a name="Oauth2Credential" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2Credential"></a>

```csharp
public AppfabricAppAuthorizationCredentialOauth2CredentialList Oauth2Credential { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList">AppfabricAppAuthorizationCredentialOauth2CredentialList</a>

---

##### `ApiKeyCredentialInput`<sup>Optional</sup> <a name="ApiKeyCredentialInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredentialInput"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationCredentialApiKeyCredential[] ApiKeyCredentialInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>[]

---

##### `Oauth2CredentialInput`<sup>Optional</sup> <a name="Oauth2CredentialInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2CredentialInput"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationCredentialOauth2Credential[] Oauth2CredentialInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationCredential InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>

---


### AppfabricAppAuthorizationTenantList <a name="AppfabricAppAuthorizationTenantList" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationTenantList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.get"></a>

```csharp
private AppfabricAppAuthorizationTenantOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.internalValue"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationTenant[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>[]

---


### AppfabricAppAuthorizationTenantOutputReference <a name="AppfabricAppAuthorizationTenantOutputReference" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationTenantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayNameInput">TenantDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifierInput">TenantIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayName">TenantDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifier">TenantIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TenantDisplayNameInput`<sup>Optional</sup> <a name="TenantDisplayNameInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayNameInput"></a>

```csharp
public string TenantDisplayNameInput { get; }
```

- *Type:* string

---

##### `TenantIdentifierInput`<sup>Optional</sup> <a name="TenantIdentifierInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifierInput"></a>

```csharp
public string TenantIdentifierInput { get; }
```

- *Type:* string

---

##### `TenantDisplayName`<sup>Required</sup> <a name="TenantDisplayName" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayName"></a>

```csharp
public string TenantDisplayName { get; }
```

- *Type:* string

---

##### `TenantIdentifier`<sup>Required</sup> <a name="TenantIdentifier" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifier"></a>

```csharp
public string TenantIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationTenant InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>

---


### AppfabricAppAuthorizationTimeoutsOutputReference <a name="AppfabricAppAuthorizationTimeoutsOutputReference" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppfabricAppAuthorizationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppfabricAppAuthorizationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>

---




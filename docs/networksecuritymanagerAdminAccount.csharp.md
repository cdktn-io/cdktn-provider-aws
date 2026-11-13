# `networksecuritymanagerAdminAccount` Submodule <a name="`networksecuritymanagerAdminAccount` Submodule" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerAdminAccount <a name="NetworksecuritymanagerAdminAccount" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account aws_networksecuritymanager_admin_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccount(Construct Scope, string Id, NetworksecuritymanagerAdminAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig">NetworksecuritymanagerAdminAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig">NetworksecuritymanagerAdminAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope">PutAdminScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetAdminScope">ResetAdminScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdminScope` <a name="PutAdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope"></a>

```csharp
private void PutAdminScope(IResolvable|NetworksecuritymanagerAdminAccountAdminScope[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworksecuritymanagerAdminAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

---

##### `ResetAdminScope` <a name="ResetAdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetAdminScope"></a>

```csharp
private void ResetAdminScope()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerAdminAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworksecuritymanagerAdminAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworksecuritymanagerAdminAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworksecuritymanagerAdminAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworksecuritymanagerAdminAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworksecuritymanagerAdminAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworksecuritymanagerAdminAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworksecuritymanagerAdminAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerAdminAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScope">AdminScope</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList">NetworksecuritymanagerAdminAccountAdminScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference">NetworksecuritymanagerAdminAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScopeInput">AdminScopeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdminScope`<sup>Required</sup> <a name="AdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScope"></a>

```csharp
public NetworksecuritymanagerAdminAccountAdminScopeList AdminScope { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList">NetworksecuritymanagerAdminAccountAdminScopeList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeouts"></a>

```csharp
public NetworksecuritymanagerAdminAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference">NetworksecuritymanagerAdminAccountTimeoutsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AdminScopeInput`<sup>Optional</sup> <a name="AdminScopeInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScopeInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScope[] AdminScopeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>[]

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerAdminAccountAdminScope <a name="NetworksecuritymanagerAdminAccountAdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScope {
    IResolvable|NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope[] FirewallTypeScope = null,
    IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilter[] ScopeFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.firewallTypeScope">FirewallTypeScope</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>[]</code> | firewall_type_scope block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.scopeFilter">ScopeFilter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>[]</code> | scope_filter block. |

---

##### `FirewallTypeScope`<sup>Optional</sup> <a name="FirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.firewallTypeScope"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope[] FirewallTypeScope { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>[]

firewall_type_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_type_scope NetworksecuritymanagerAdminAccount#firewall_type_scope}

---

##### `ScopeFilter`<sup>Optional</sup> <a name="ScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.scopeFilter"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilter[] ScopeFilter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>[]

scope_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#scope_filter NetworksecuritymanagerAdminAccount#scope_filter}

---

### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope {
    bool|IResolvable AllFirewallTypesEnabled = null,
    string[] FirewallTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.allFirewallTypesEnabled">AllFirewallTypesEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#all_firewall_types_enabled NetworksecuritymanagerAdminAccount#all_firewall_types_enabled}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.firewallTypes">FirewallTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_types NetworksecuritymanagerAdminAccount#firewall_types}. |

---

##### `AllFirewallTypesEnabled`<sup>Optional</sup> <a name="AllFirewallTypesEnabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.allFirewallTypesEnabled"></a>

```csharp
public bool|IResolvable AllFirewallTypesEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#all_firewall_types_enabled NetworksecuritymanagerAdminAccount#all_firewall_types_enabled}.

---

##### `FirewallTypes`<sup>Optional</sup> <a name="FirewallTypes" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.firewallTypes"></a>

```csharp
public string[] FirewallTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_types NetworksecuritymanagerAdminAccount#firewall_types}.

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilter <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilter {
    IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly[] ExcludeOnly = null,
    bool|IResolvable IncludeAll = null,
    IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly[] IncludeOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.excludeOnly">ExcludeOnly</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>[]</code> | exclude_only block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeAll">IncludeAll</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_all NetworksecuritymanagerAdminAccount#include_all}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeOnly">IncludeOnly</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>[]</code> | include_only block. |

---

##### `ExcludeOnly`<sup>Optional</sup> <a name="ExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.excludeOnly"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly[] ExcludeOnly { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>[]

exclude_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#exclude_only NetworksecuritymanagerAdminAccount#exclude_only}

---

##### `IncludeAll`<sup>Optional</sup> <a name="IncludeAll" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeAll"></a>

```csharp
public bool|IResolvable IncludeAll { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_all NetworksecuritymanagerAdminAccount#include_all}.

---

##### `IncludeOnly`<sup>Optional</sup> <a name="IncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeOnly"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly[] IncludeOnly { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>[]

include_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_only NetworksecuritymanagerAdminAccount#include_only}

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly {
    string[] Accounts = null,
    string[] OrganizationalUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.accounts">Accounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.organizationalUnits">OrganizationalUnits</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}. |

---

##### `Accounts`<sup>Optional</sup> <a name="Accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.accounts"></a>

```csharp
public string[] Accounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}.

---

##### `OrganizationalUnits`<sup>Optional</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.organizationalUnits"></a>

```csharp
public string[] OrganizationalUnits { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}.

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly {
    string[] Accounts = null,
    string[] OrganizationalUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.accounts">Accounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.organizationalUnits">OrganizationalUnits</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}. |

---

##### `Accounts`<sup>Optional</sup> <a name="Accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.accounts"></a>

```csharp
public string[] Accounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}.

---

##### `OrganizationalUnits`<sup>Optional</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.organizationalUnits"></a>

```csharp
public string[] OrganizationalUnits { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}.

---

### NetworksecuritymanagerAdminAccountConfig <a name="NetworksecuritymanagerAdminAccountConfig" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    double Priority,
    IResolvable|NetworksecuritymanagerAdminAccountAdminScope[] AdminScope = null,
    string Region = null,
    NetworksecuritymanagerAdminAccountTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.adminScope">AdminScope</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>[]</code> | admin_scope block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}.

---

##### `AdminScope`<sup>Optional</sup> <a name="AdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.adminScope"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScope[] AdminScope { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>[]

admin_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#admin_scope NetworksecuritymanagerAdminAccount#admin_scope}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#region NetworksecuritymanagerAdminAccount#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.timeouts"></a>

```csharp
public NetworksecuritymanagerAdminAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#timeouts NetworksecuritymanagerAdminAccount#timeouts}

---

### NetworksecuritymanagerAdminAccountTimeouts <a name="NetworksecuritymanagerAdminAccountTimeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#create NetworksecuritymanagerAdminAccount#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#delete NetworksecuritymanagerAdminAccount#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#update NetworksecuritymanagerAdminAccount#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get"></a>

```csharp
private NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>[]

---


### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetAllFirewallTypesEnabled">ResetAllFirewallTypesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetFirewallTypes">ResetFirewallTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllFirewallTypesEnabled` <a name="ResetAllFirewallTypesEnabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetAllFirewallTypesEnabled"></a>

```csharp
private void ResetAllFirewallTypesEnabled()
```

##### `ResetFirewallTypes` <a name="ResetFirewallTypes" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetFirewallTypes"></a>

```csharp
private void ResetFirewallTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabledInput">AllFirewallTypesEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypesInput">FirewallTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabled">AllFirewallTypesEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypes">FirewallTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllFirewallTypesEnabledInput`<sup>Optional</sup> <a name="AllFirewallTypesEnabledInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabledInput"></a>

```csharp
public bool|IResolvable AllFirewallTypesEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FirewallTypesInput`<sup>Optional</sup> <a name="FirewallTypesInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypesInput"></a>

```csharp
public string[] FirewallTypesInput { get; }
```

- *Type:* string[]

---

##### `AllFirewallTypesEnabled`<sup>Required</sup> <a name="AllFirewallTypesEnabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabled"></a>

```csharp
public bool|IResolvable AllFirewallTypesEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FirewallTypes`<sup>Required</sup> <a name="FirewallTypes" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypes"></a>

```csharp
public string[] FirewallTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeList <a name="NetworksecuritymanagerAdminAccountAdminScopeList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScopeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get"></a>

```csharp
private NetworksecuritymanagerAdminAccountAdminScopeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScope[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>[]

---


### NetworksecuritymanagerAdminAccountAdminScopeOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope">PutFirewallTypeScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter">PutScopeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetFirewallTypeScope">ResetFirewallTypeScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetScopeFilter">ResetScopeFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFirewallTypeScope` <a name="PutFirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope"></a>

```csharp
private void PutFirewallTypeScope(IResolvable|NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>[]

---

##### `PutScopeFilter` <a name="PutScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter"></a>

```csharp
private void PutScopeFilter(IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>[]

---

##### `ResetFirewallTypeScope` <a name="ResetFirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetFirewallTypeScope"></a>

```csharp
private void ResetFirewallTypeScope()
```

##### `ResetScopeFilter` <a name="ResetScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetScopeFilter"></a>

```csharp
private void ResetScopeFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScope">FirewallTypeScope</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilter">ScopeFilter</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScopeInput">FirewallTypeScopeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilterInput">ScopeFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FirewallTypeScope`<sup>Required</sup> <a name="FirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScope"></a>

```csharp
public NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList FirewallTypeScope { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList</a>

---

##### `ScopeFilter`<sup>Required</sup> <a name="ScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilter"></a>

```csharp
public NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList ScopeFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList</a>

---

##### `FirewallTypeScopeInput`<sup>Optional</sup> <a name="FirewallTypeScopeInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScopeInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope[] FirewallTypeScopeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>[]

---

##### `ScopeFilterInput`<sup>Optional</sup> <a name="ScopeFilterInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilterInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilter[] ScopeFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScope InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get"></a>

```csharp
private NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>[]

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetAccounts">ResetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetOrganizationalUnits">ResetOrganizationalUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccounts` <a name="ResetAccounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetAccounts"></a>

```csharp
private void ResetAccounts()
```

##### `ResetOrganizationalUnits` <a name="ResetOrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetOrganizationalUnits"></a>

```csharp
private void ResetOrganizationalUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accountsInput">AccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnitsInput">OrganizationalUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accounts">Accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnits">OrganizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accountsInput"></a>

```csharp
public string[] AccountsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnitsInput`<sup>Optional</sup> <a name="OrganizationalUnitsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnitsInput"></a>

```csharp
public string[] OrganizationalUnitsInput { get; }
```

- *Type:* string[]

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accounts"></a>

```csharp
public string[] Accounts { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnits"></a>

```csharp
public string[] OrganizationalUnits { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get"></a>

```csharp
private NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>[]

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetAccounts">ResetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetOrganizationalUnits">ResetOrganizationalUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccounts` <a name="ResetAccounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetAccounts"></a>

```csharp
private void ResetAccounts()
```

##### `ResetOrganizationalUnits` <a name="ResetOrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetOrganizationalUnits"></a>

```csharp
private void ResetOrganizationalUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accountsInput">AccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnitsInput">OrganizationalUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accounts">Accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnits">OrganizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accountsInput"></a>

```csharp
public string[] AccountsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnitsInput`<sup>Optional</sup> <a name="OrganizationalUnitsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnitsInput"></a>

```csharp
public string[] OrganizationalUnitsInput { get; }
```

- *Type:* string[]

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accounts"></a>

```csharp
public string[] Accounts { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnits"></a>

```csharp
public string[] OrganizationalUnits { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get"></a>

```csharp
private NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>[]

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly">PutExcludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly">PutIncludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetExcludeOnly">ResetExcludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeAll">ResetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeOnly">ResetIncludeOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludeOnly` <a name="PutExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly"></a>

```csharp
private void PutExcludeOnly(IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>[]

---

##### `PutIncludeOnly` <a name="PutIncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly"></a>

```csharp
private void PutIncludeOnly(IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>[]

---

##### `ResetExcludeOnly` <a name="ResetExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetExcludeOnly"></a>

```csharp
private void ResetExcludeOnly()
```

##### `ResetIncludeAll` <a name="ResetIncludeAll" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeAll"></a>

```csharp
private void ResetIncludeAll()
```

##### `ResetIncludeOnly` <a name="ResetIncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeOnly"></a>

```csharp
private void ResetIncludeOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnly">ExcludeOnly</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnly">IncludeOnly</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnlyInput">ExcludeOnlyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAllInput">IncludeAllInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnlyInput">IncludeOnlyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAll">IncludeAll</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeOnly`<sup>Required</sup> <a name="ExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnly"></a>

```csharp
public NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList ExcludeOnly { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList</a>

---

##### `IncludeOnly`<sup>Required</sup> <a name="IncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnly"></a>

```csharp
public NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList IncludeOnly { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList</a>

---

##### `ExcludeOnlyInput`<sup>Optional</sup> <a name="ExcludeOnlyInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnlyInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly[] ExcludeOnlyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>[]

---

##### `IncludeAllInput`<sup>Optional</sup> <a name="IncludeAllInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAllInput"></a>

```csharp
public bool|IResolvable IncludeAllInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeOnlyInput`<sup>Optional</sup> <a name="IncludeOnlyInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnlyInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly[] IncludeOnlyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>[]

---

##### `IncludeAll`<sup>Required</sup> <a name="IncludeAll" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAll"></a>

```csharp
public bool|IResolvable IncludeAll { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>

---


### NetworksecuritymanagerAdminAccountTimeoutsOutputReference <a name="NetworksecuritymanagerAdminAccountTimeoutsOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerAdminAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerAdminAccountTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

---




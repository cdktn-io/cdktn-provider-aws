# `directoryServiceIpRoutesExclusive` Submodule <a name="`directoryServiceIpRoutesExclusive` Submodule" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceIpRoutesExclusive <a name="DirectoryServiceIpRoutesExclusive" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive aws_directory_service_ip_routes_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DirectoryServiceIpRoutesExclusive(Construct Scope, string Id, DirectoryServiceIpRoutesExclusiveConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig">DirectoryServiceIpRoutesExclusiveConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig">DirectoryServiceIpRoutesExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute">PutIpRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetIpRoute">ResetIpRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetUpdateSecurityGroupForDirectoryControllers">ResetUpdateSecurityGroupForDirectoryControllers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpRoute` <a name="PutIpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute"></a>

```csharp
private void PutIpRoute(IResolvable|DirectoryServiceIpRoutesExclusiveIpRoute[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts"></a>

```csharp
private void PutTimeouts(DirectoryServiceIpRoutesExclusiveTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

---

##### `ResetIpRoute` <a name="ResetIpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetIpRoute"></a>

```csharp
private void ResetIpRoute()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpdateSecurityGroupForDirectoryControllers` <a name="ResetUpdateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetUpdateSecurityGroupForDirectoryControllers"></a>

```csharp
private void ResetUpdateSecurityGroupForDirectoryControllers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryServiceIpRoutesExclusive resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DirectoryServiceIpRoutesExclusive.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DirectoryServiceIpRoutesExclusive.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DirectoryServiceIpRoutesExclusive.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DirectoryServiceIpRoutesExclusive.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DirectoryServiceIpRoutesExclusive resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectoryServiceIpRoutesExclusive to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectoryServiceIpRoutesExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryServiceIpRoutesExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRoute">IpRoute</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList">DirectoryServiceIpRoutesExclusiveIpRouteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference">DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRouteInput">IpRouteInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllersInput">UpdateSecurityGroupForDirectoryControllersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllers">UpdateSecurityGroupForDirectoryControllers</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IpRoute`<sup>Required</sup> <a name="IpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRoute"></a>

```csharp
public DirectoryServiceIpRoutesExclusiveIpRouteList IpRoute { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList">DirectoryServiceIpRoutesExclusiveIpRouteList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeouts"></a>

```csharp
public DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference">DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference</a>

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `IpRouteInput`<sup>Optional</sup> <a name="IpRouteInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRouteInput"></a>

```csharp
public IResolvable|DirectoryServiceIpRoutesExclusiveIpRoute[] IpRouteInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeoutsInput"></a>

```csharp
public IResolvable|DirectoryServiceIpRoutesExclusiveTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

---

##### `UpdateSecurityGroupForDirectoryControllersInput`<sup>Optional</sup> <a name="UpdateSecurityGroupForDirectoryControllersInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllersInput"></a>

```csharp
public bool|IResolvable UpdateSecurityGroupForDirectoryControllersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `UpdateSecurityGroupForDirectoryControllers`<sup>Required</sup> <a name="UpdateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllers"></a>

```csharp
public bool|IResolvable UpdateSecurityGroupForDirectoryControllers { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceIpRoutesExclusiveConfig <a name="DirectoryServiceIpRoutesExclusiveConfig" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DirectoryServiceIpRoutesExclusiveConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DirectoryId,
    IResolvable|DirectoryServiceIpRoutesExclusiveIpRoute[] IpRoute = null,
    string Region = null,
    DirectoryServiceIpRoutesExclusiveTimeouts Timeouts = null,
    bool|IResolvable UpdateSecurityGroupForDirectoryControllers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.ipRoute">IpRoute</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>[]</code> | ip_route block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.updateSecurityGroupForDirectoryControllers">UpdateSecurityGroupForDirectoryControllers</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}.

---

##### `IpRoute`<sup>Optional</sup> <a name="IpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.ipRoute"></a>

```csharp
public IResolvable|DirectoryServiceIpRoutesExclusiveIpRoute[] IpRoute { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>[]

ip_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#ip_route DirectoryServiceIpRoutesExclusive#ip_route}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#region DirectoryServiceIpRoutesExclusive#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.timeouts"></a>

```csharp
public DirectoryServiceIpRoutesExclusiveTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#timeouts DirectoryServiceIpRoutesExclusive#timeouts}

---

##### `UpdateSecurityGroupForDirectoryControllers`<sup>Optional</sup> <a name="UpdateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.updateSecurityGroupForDirectoryControllers"></a>

```csharp
public bool|IResolvable UpdateSecurityGroupForDirectoryControllers { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}.

---

### DirectoryServiceIpRoutesExclusiveIpRoute <a name="DirectoryServiceIpRoutesExclusiveIpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DirectoryServiceIpRoutesExclusiveIpRoute {
    string CidrIp = null,
    string CidrIpv6 = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIp">CidrIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ip DirectoryServiceIpRoutesExclusive#cidr_ip}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIpv6">CidrIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ipv6 DirectoryServiceIpRoutesExclusive#cidr_ipv6}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#description DirectoryServiceIpRoutesExclusive#description}. |

---

##### `CidrIp`<sup>Optional</sup> <a name="CidrIp" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIp"></a>

```csharp
public string CidrIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ip DirectoryServiceIpRoutesExclusive#cidr_ip}.

---

##### `CidrIpv6`<sup>Optional</sup> <a name="CidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIpv6"></a>

```csharp
public string CidrIpv6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ipv6 DirectoryServiceIpRoutesExclusive#cidr_ipv6}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#description DirectoryServiceIpRoutesExclusive#description}.

---

### DirectoryServiceIpRoutesExclusiveTimeouts <a name="DirectoryServiceIpRoutesExclusiveTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DirectoryServiceIpRoutesExclusiveTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#create DirectoryServiceIpRoutesExclusive#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_ip_routes_exclusive#update DirectoryServiceIpRoutesExclusive#update}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceIpRoutesExclusiveIpRouteList <a name="DirectoryServiceIpRoutesExclusiveIpRouteList" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DirectoryServiceIpRoutesExclusiveIpRouteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get"></a>

```csharp
private DirectoryServiceIpRoutesExclusiveIpRouteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.internalValue"></a>

```csharp
public IResolvable|DirectoryServiceIpRoutesExclusiveIpRoute[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>[]

---


### DirectoryServiceIpRoutesExclusiveIpRouteOutputReference <a name="DirectoryServiceIpRoutesExclusiveIpRouteOutputReference" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DirectoryServiceIpRoutesExclusiveIpRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIp">ResetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIpv6">ResetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrIp` <a name="ResetCidrIp" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIp"></a>

```csharp
private void ResetCidrIp()
```

##### `ResetCidrIpv6` <a name="ResetCidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIpv6"></a>

```csharp
private void ResetCidrIpv6()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpInput">CidrIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6Input">CidrIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIp">CidrIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6">CidrIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrIpInput`<sup>Optional</sup> <a name="CidrIpInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpInput"></a>

```csharp
public string CidrIpInput { get; }
```

- *Type:* string

---

##### `CidrIpv6Input`<sup>Optional</sup> <a name="CidrIpv6Input" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6Input"></a>

```csharp
public string CidrIpv6Input { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `CidrIp`<sup>Required</sup> <a name="CidrIp" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIp"></a>

```csharp
public string CidrIp { get; }
```

- *Type:* string

---

##### `CidrIpv6`<sup>Required</sup> <a name="CidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6"></a>

```csharp
public string CidrIpv6 { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectoryServiceIpRoutesExclusiveIpRoute InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>

---


### DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference <a name="DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectoryServiceIpRoutesExclusiveTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

---




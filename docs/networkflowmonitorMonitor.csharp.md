# `networkflowmonitorMonitor` Submodule <a name="`networkflowmonitorMonitor` Submodule" id="@cdktf/provider-aws.networkflowmonitorMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkflowmonitorMonitor <a name="NetworkflowmonitorMonitor" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor aws_networkflowmonitor_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorMonitor(Construct Scope, string Id, NetworkflowmonitorMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig">NetworkflowmonitorMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig">NetworkflowmonitorMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResource">PutLocalResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResource">PutRemoteResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetLocalResource">ResetLocalResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRemoteResource">ResetRemoteResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocalResource` <a name="PutLocalResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResource"></a>

```csharp
private void PutLocalResource(IResolvable|NetworkflowmonitorMonitorLocalResource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResource.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>[]

---

##### `PutRemoteResource` <a name="PutRemoteResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResource"></a>

```csharp
private void PutRemoteResource(IResolvable|NetworkflowmonitorMonitorRemoteResource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResource.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkflowmonitorMonitorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a>

---

##### `ResetLocalResource` <a name="ResetLocalResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetLocalResource"></a>

```csharp
private void ResetLocalResource()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRemoteResource` <a name="ResetRemoteResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRemoteResource"></a>

```csharp
private void ResetRemoteResource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkflowmonitorMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkflowmonitorMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkflowmonitorMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkflowmonitorMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkflowmonitorMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkflowmonitorMonitor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkflowmonitorMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkflowmonitorMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkflowmonitorMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResource">LocalResource</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList">NetworkflowmonitorMonitorLocalResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorArn">MonitorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResource">RemoteResource</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList">NetworkflowmonitorMonitorRemoteResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference">NetworkflowmonitorMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResourceInput">LocalResourceInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorNameInput">MonitorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResourceInput">RemoteResourceInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArnInput">ScopeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorName">MonitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArn">ScopeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `LocalResource`<sup>Required</sup> <a name="LocalResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResource"></a>

```csharp
public NetworkflowmonitorMonitorLocalResourceList LocalResource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList">NetworkflowmonitorMonitorLocalResourceList</a>

---

##### `MonitorArn`<sup>Required</sup> <a name="MonitorArn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorArn"></a>

```csharp
public string MonitorArn { get; }
```

- *Type:* string

---

##### `RemoteResource`<sup>Required</sup> <a name="RemoteResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResource"></a>

```csharp
public NetworkflowmonitorMonitorRemoteResourceList RemoteResource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList">NetworkflowmonitorMonitorRemoteResourceList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.timeouts"></a>

```csharp
public NetworkflowmonitorMonitorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference">NetworkflowmonitorMonitorTimeoutsOutputReference</a>

---

##### `LocalResourceInput`<sup>Optional</sup> <a name="LocalResourceInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResourceInput"></a>

```csharp
public IResolvable|NetworkflowmonitorMonitorLocalResource[] LocalResourceInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>[]

---

##### `MonitorNameInput`<sup>Optional</sup> <a name="MonitorNameInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorNameInput"></a>

```csharp
public string MonitorNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RemoteResourceInput`<sup>Optional</sup> <a name="RemoteResourceInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResourceInput"></a>

```csharp
public IResolvable|NetworkflowmonitorMonitorRemoteResource[] RemoteResourceInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>[]

---

##### `ScopeArnInput`<sup>Optional</sup> <a name="ScopeArnInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArnInput"></a>

```csharp
public string ScopeArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkflowmonitorMonitorTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a>

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorName"></a>

```csharp
public string MonitorName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ScopeArn`<sup>Required</sup> <a name="ScopeArn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArn"></a>

```csharp
public string ScopeArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorMonitorConfig <a name="NetworkflowmonitorMonitorConfig" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorMonitorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MonitorName,
    string ScopeArn,
    IResolvable|NetworkflowmonitorMonitorLocalResource[] LocalResource = null,
    string Region = null,
    IResolvable|NetworkflowmonitorMonitorRemoteResource[] RemoteResource = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    NetworkflowmonitorMonitorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.monitorName">MonitorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#monitor_name NetworkflowmonitorMonitor#monitor_name}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.scopeArn">ScopeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#scope_arn NetworkflowmonitorMonitor#scope_arn}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.localResource">LocalResource</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>[]</code> | local_resource block. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.remoteResource">RemoteResource</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>[]</code> | remote_resource block. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#tags NetworkflowmonitorMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.monitorName"></a>

```csharp
public string MonitorName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#monitor_name NetworkflowmonitorMonitor#monitor_name}.

---

##### `ScopeArn`<sup>Required</sup> <a name="ScopeArn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.scopeArn"></a>

```csharp
public string ScopeArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#scope_arn NetworkflowmonitorMonitor#scope_arn}.

---

##### `LocalResource`<sup>Optional</sup> <a name="LocalResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.localResource"></a>

```csharp
public IResolvable|NetworkflowmonitorMonitorLocalResource[] LocalResource { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>[]

local_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#local_resource NetworkflowmonitorMonitor#local_resource}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#region NetworkflowmonitorMonitor#region}

---

##### `RemoteResource`<sup>Optional</sup> <a name="RemoteResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.remoteResource"></a>

```csharp
public IResolvable|NetworkflowmonitorMonitorRemoteResource[] RemoteResource { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>[]

remote_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#remote_resource NetworkflowmonitorMonitor#remote_resource}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#tags NetworkflowmonitorMonitor#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.timeouts"></a>

```csharp
public NetworkflowmonitorMonitorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#timeouts NetworkflowmonitorMonitor#timeouts}

---

### NetworkflowmonitorMonitorLocalResource <a name="NetworkflowmonitorMonitorLocalResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorMonitorLocalResource {
    string Identifier,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}.

---

### NetworkflowmonitorMonitorRemoteResource <a name="NetworkflowmonitorMonitorRemoteResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorMonitorRemoteResource {
    string Identifier,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}.

---

### NetworkflowmonitorMonitorTimeouts <a name="NetworkflowmonitorMonitorTimeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorMonitorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#create NetworkflowmonitorMonitor#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#delete NetworkflowmonitorMonitor#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_monitor#update NetworkflowmonitorMonitor#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorMonitorLocalResourceList <a name="NetworkflowmonitorMonitorLocalResourceList" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorMonitorLocalResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.get"></a>

```csharp
private NetworkflowmonitorMonitorLocalResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorMonitorLocalResource[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>[]

---


### NetworkflowmonitorMonitorLocalResourceOutputReference <a name="NetworkflowmonitorMonitorLocalResourceOutputReference" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorMonitorLocalResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorMonitorLocalResource InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>

---


### NetworkflowmonitorMonitorRemoteResourceList <a name="NetworkflowmonitorMonitorRemoteResourceList" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorMonitorRemoteResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.get"></a>

```csharp
private NetworkflowmonitorMonitorRemoteResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorMonitorRemoteResource[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>[]

---


### NetworkflowmonitorMonitorRemoteResourceOutputReference <a name="NetworkflowmonitorMonitorRemoteResourceOutputReference" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorMonitorRemoteResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorMonitorRemoteResource InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>

---


### NetworkflowmonitorMonitorTimeoutsOutputReference <a name="NetworkflowmonitorMonitorTimeoutsOutputReference" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorMonitorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorMonitorTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a>

---




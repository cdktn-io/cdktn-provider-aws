# `grafanaRoleAssociation` Submodule <a name="`grafanaRoleAssociation` Submodule" id="@cdktn/provider-aws.grafanaRoleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaRoleAssociation <a name="GrafanaRoleAssociation" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association aws_grafana_role_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GrafanaRoleAssociation(Construct Scope, string Id, GrafanaRoleAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig">GrafanaRoleAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig">GrafanaRoleAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetGroupIds">ResetGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetUserIds">ResetUserIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(GrafanaRoleAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a>

---

##### `ResetGroupIds` <a name="ResetGroupIds" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetGroupIds"></a>

```csharp
private void ResetGroupIds()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserIds` <a name="ResetUserIds" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetUserIds"></a>

```csharp
private void ResetUserIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GrafanaRoleAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GrafanaRoleAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GrafanaRoleAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GrafanaRoleAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GrafanaRoleAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GrafanaRoleAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GrafanaRoleAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GrafanaRoleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GrafanaRoleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference">GrafanaRoleAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.groupIdsInput">GroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.userIdsInput">UserIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.groupIds">GroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.userIds">UserIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.timeouts"></a>

```csharp
public GrafanaRoleAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference">GrafanaRoleAssociationTimeoutsOutputReference</a>

---

##### `GroupIdsInput`<sup>Optional</sup> <a name="GroupIdsInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.groupIdsInput"></a>

```csharp
public string[] GroupIdsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.timeoutsInput"></a>

```csharp
public IResolvable|GrafanaRoleAssociationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a>

---

##### `UserIdsInput`<sup>Optional</sup> <a name="UserIdsInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.userIdsInput"></a>

```csharp
public string[] UserIdsInput { get; }
```

- *Type:* string[]

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `GroupIds`<sup>Required</sup> <a name="GroupIds" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.groupIds"></a>

```csharp
public string[] GroupIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `UserIds`<sup>Required</sup> <a name="UserIds" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.userIds"></a>

```csharp
public string[] UserIds { get; }
```

- *Type:* string[]

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaRoleAssociationConfig <a name="GrafanaRoleAssociationConfig" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GrafanaRoleAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Role,
    string WorkspaceId,
    string[] GroupIds = null,
    string Id = null,
    string Region = null,
    GrafanaRoleAssociationTimeouts Timeouts = null,
    string[] UserIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#role GrafanaRoleAssociation#role}. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#workspace_id GrafanaRoleAssociation#workspace_id}. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.groupIds">GroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#group_ids GrafanaRoleAssociation#group_ids}. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#id GrafanaRoleAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.userIds">UserIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#user_ids GrafanaRoleAssociation#user_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#role GrafanaRoleAssociation#role}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#workspace_id GrafanaRoleAssociation#workspace_id}.

---

##### `GroupIds`<sup>Optional</sup> <a name="GroupIds" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.groupIds"></a>

```csharp
public string[] GroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#group_ids GrafanaRoleAssociation#group_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#id GrafanaRoleAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#region GrafanaRoleAssociation#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.timeouts"></a>

```csharp
public GrafanaRoleAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#timeouts GrafanaRoleAssociation#timeouts}

---

##### `UserIds`<sup>Optional</sup> <a name="UserIds" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.userIds"></a>

```csharp
public string[] UserIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#user_ids GrafanaRoleAssociation#user_ids}.

---

### GrafanaRoleAssociationTimeouts <a name="GrafanaRoleAssociationTimeouts" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GrafanaRoleAssociationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#create GrafanaRoleAssociation#create}. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#delete GrafanaRoleAssociation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#create GrafanaRoleAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/grafana_role_association#delete GrafanaRoleAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrafanaRoleAssociationTimeoutsOutputReference <a name="GrafanaRoleAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GrafanaRoleAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GrafanaRoleAssociationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a>

---




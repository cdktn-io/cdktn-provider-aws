# `workspaceswebUserAccessLoggingSettingsAssociation` Submodule <a name="`workspaceswebUserAccessLoggingSettingsAssociation` Submodule" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebUserAccessLoggingSettingsAssociation <a name="WorkspaceswebUserAccessLoggingSettingsAssociation" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workspacesweb_user_access_logging_settings_association aws_workspacesweb_user_access_logging_settings_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WorkspaceswebUserAccessLoggingSettingsAssociation(Construct Scope, string Id, WorkspaceswebUserAccessLoggingSettingsAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig">WorkspaceswebUserAccessLoggingSettingsAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig">WorkspaceswebUserAccessLoggingSettingsAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceswebUserAccessLoggingSettingsAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkspaceswebUserAccessLoggingSettingsAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkspaceswebUserAccessLoggingSettingsAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkspaceswebUserAccessLoggingSettingsAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkspaceswebUserAccessLoggingSettingsAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkspaceswebUserAccessLoggingSettingsAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceswebUserAccessLoggingSettingsAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceswebUserAccessLoggingSettingsAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workspacesweb_user_access_logging_settings_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebUserAccessLoggingSettingsAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.portalArnInput">PortalArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.userAccessLoggingSettingsArnInput">UserAccessLoggingSettingsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.portalArn">PortalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.userAccessLoggingSettingsArn">UserAccessLoggingSettingsArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PortalArnInput`<sup>Optional</sup> <a name="PortalArnInput" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.portalArnInput"></a>

```csharp
public string PortalArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `UserAccessLoggingSettingsArnInput`<sup>Optional</sup> <a name="UserAccessLoggingSettingsArnInput" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.userAccessLoggingSettingsArnInput"></a>

```csharp
public string UserAccessLoggingSettingsArnInput { get; }
```

- *Type:* string

---

##### `PortalArn`<sup>Required</sup> <a name="PortalArn" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.portalArn"></a>

```csharp
public string PortalArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `UserAccessLoggingSettingsArn`<sup>Required</sup> <a name="UserAccessLoggingSettingsArn" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.userAccessLoggingSettingsArn"></a>

```csharp
public string UserAccessLoggingSettingsArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebUserAccessLoggingSettingsAssociationConfig <a name="WorkspaceswebUserAccessLoggingSettingsAssociationConfig" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WorkspaceswebUserAccessLoggingSettingsAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PortalArn,
    string UserAccessLoggingSettingsArn,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.portalArn">PortalArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workspacesweb_user_access_logging_settings_association#portal_arn WorkspaceswebUserAccessLoggingSettingsAssociation#portal_arn}. |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.userAccessLoggingSettingsArn">UserAccessLoggingSettingsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workspacesweb_user_access_logging_settings_association#user_access_logging_settings_arn WorkspaceswebUserAccessLoggingSettingsAssociation#user_access_logging_settings_arn}. |
| <code><a href="#@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PortalArn`<sup>Required</sup> <a name="PortalArn" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.portalArn"></a>

```csharp
public string PortalArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workspacesweb_user_access_logging_settings_association#portal_arn WorkspaceswebUserAccessLoggingSettingsAssociation#portal_arn}.

---

##### `UserAccessLoggingSettingsArn`<sup>Required</sup> <a name="UserAccessLoggingSettingsArn" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.userAccessLoggingSettingsArn"></a>

```csharp
public string UserAccessLoggingSettingsArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workspacesweb_user_access_logging_settings_association#user_access_logging_settings_arn WorkspaceswebUserAccessLoggingSettingsAssociation#user_access_logging_settings_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workspacesweb_user_access_logging_settings_association#region WorkspaceswebUserAccessLoggingSettingsAssociation#region}

---




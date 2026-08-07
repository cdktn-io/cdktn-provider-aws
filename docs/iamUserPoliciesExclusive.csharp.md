# `iamUserPoliciesExclusive` Submodule <a name="`iamUserPoliciesExclusive` Submodule" id="@cdktn/provider-aws.iamUserPoliciesExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamUserPoliciesExclusive <a name="IamUserPoliciesExclusive" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_user_policies_exclusive aws_iam_user_policies_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IamUserPoliciesExclusive(Construct Scope, string Id, IamUserPoliciesExclusiveConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig">IamUserPoliciesExclusiveConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig">IamUserPoliciesExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IamUserPoliciesExclusive resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IamUserPoliciesExclusive.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IamUserPoliciesExclusive.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IamUserPoliciesExclusive.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IamUserPoliciesExclusive.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IamUserPoliciesExclusive resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamUserPoliciesExclusive to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamUserPoliciesExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_user_policies_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IamUserPoliciesExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.policyNamesInput">PolicyNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.policyNames">PolicyNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.userName">UserName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PolicyNamesInput`<sup>Optional</sup> <a name="PolicyNamesInput" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.policyNamesInput"></a>

```csharp
public string[] PolicyNamesInput { get; }
```

- *Type:* string[]

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `PolicyNames`<sup>Required</sup> <a name="PolicyNames" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.policyNames"></a>

```csharp
public string[] PolicyNames { get; }
```

- *Type:* string[]

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamUserPoliciesExclusiveConfig <a name="IamUserPoliciesExclusiveConfig" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IamUserPoliciesExclusiveConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] PolicyNames,
    string UserName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.policyNames">PolicyNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_user_policies_exclusive#policy_names IamUserPoliciesExclusive#policy_names}. |
| <code><a href="#@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_user_policies_exclusive#user_name IamUserPoliciesExclusive#user_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PolicyNames`<sup>Required</sup> <a name="PolicyNames" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.policyNames"></a>

```csharp
public string[] PolicyNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_user_policies_exclusive#policy_names IamUserPoliciesExclusive#policy_names}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_user_policies_exclusive#user_name IamUserPoliciesExclusive#user_name}.

---




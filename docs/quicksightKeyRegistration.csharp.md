# `quicksightKeyRegistration` Submodule <a name="`quicksightKeyRegistration` Submodule" id="@cdktn/provider-aws.quicksightKeyRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightKeyRegistration <a name="QuicksightKeyRegistration" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/quicksight_key_registration aws_quicksight_key_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new QuicksightKeyRegistration(Construct Scope, string Id, QuicksightKeyRegistrationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig">QuicksightKeyRegistrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig">QuicksightKeyRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.putKeyRegistration">PutKeyRegistration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetKeyRegistration">ResetKeyRegistration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyRegistration` <a name="PutKeyRegistration" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.putKeyRegistration"></a>

```csharp
private void PutKeyRegistration(IResolvable|QuicksightKeyRegistrationKeyRegistration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.putKeyRegistration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>[]

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetKeyRegistration` <a name="ResetKeyRegistration" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetKeyRegistration"></a>

```csharp
private void ResetKeyRegistration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightKeyRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

QuicksightKeyRegistration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

QuicksightKeyRegistration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

QuicksightKeyRegistration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

QuicksightKeyRegistration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a QuicksightKeyRegistration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightKeyRegistration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightKeyRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/quicksight_key_registration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightKeyRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.keyRegistration">KeyRegistration</a></code> | <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList">QuicksightKeyRegistrationKeyRegistrationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.keyRegistrationInput">KeyRegistrationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `KeyRegistration`<sup>Required</sup> <a name="KeyRegistration" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.keyRegistration"></a>

```csharp
public QuicksightKeyRegistrationKeyRegistrationList KeyRegistration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList">QuicksightKeyRegistrationKeyRegistrationList</a>

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `KeyRegistrationInput`<sup>Optional</sup> <a name="KeyRegistrationInput" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.keyRegistrationInput"></a>

```csharp
public IResolvable|QuicksightKeyRegistrationKeyRegistration[] KeyRegistrationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightKeyRegistrationConfig <a name="QuicksightKeyRegistrationConfig" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new QuicksightKeyRegistrationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AwsAccountId = null,
    IResolvable|QuicksightKeyRegistrationKeyRegistration[] KeyRegistration = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/quicksight_key_registration#aws_account_id QuicksightKeyRegistration#aws_account_id}. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.keyRegistration">KeyRegistration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>[]</code> | key_registration block. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/quicksight_key_registration#aws_account_id QuicksightKeyRegistration#aws_account_id}.

---

##### `KeyRegistration`<sup>Optional</sup> <a name="KeyRegistration" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.keyRegistration"></a>

```csharp
public IResolvable|QuicksightKeyRegistrationKeyRegistration[] KeyRegistration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>[]

key_registration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/quicksight_key_registration#key_registration QuicksightKeyRegistration#key_registration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/quicksight_key_registration#region QuicksightKeyRegistration#region}

---

### QuicksightKeyRegistrationKeyRegistration <a name="QuicksightKeyRegistrationKeyRegistration" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new QuicksightKeyRegistrationKeyRegistration {
    string KeyArn,
    bool|IResolvable DefaultKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration.property.keyArn">KeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/quicksight_key_registration#key_arn QuicksightKeyRegistration#key_arn}. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration.property.defaultKey">DefaultKey</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/quicksight_key_registration#default_key QuicksightKeyRegistration#default_key}. |

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration.property.keyArn"></a>

```csharp
public string KeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/quicksight_key_registration#key_arn QuicksightKeyRegistration#key_arn}.

---

##### `DefaultKey`<sup>Optional</sup> <a name="DefaultKey" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration.property.defaultKey"></a>

```csharp
public bool|IResolvable DefaultKey { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/quicksight_key_registration#default_key QuicksightKeyRegistration#default_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightKeyRegistrationKeyRegistrationList <a name="QuicksightKeyRegistrationKeyRegistrationList" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new QuicksightKeyRegistrationKeyRegistrationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.get"></a>

```csharp
private QuicksightKeyRegistrationKeyRegistrationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightKeyRegistrationKeyRegistration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>[]

---


### QuicksightKeyRegistrationKeyRegistrationOutputReference <a name="QuicksightKeyRegistrationKeyRegistrationOutputReference" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new QuicksightKeyRegistrationKeyRegistrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.resetDefaultKey">ResetDefaultKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultKey` <a name="ResetDefaultKey" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.resetDefaultKey"></a>

```csharp
private void ResetDefaultKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.defaultKeyInput">DefaultKeyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.keyArnInput">KeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.defaultKey">DefaultKey</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.keyArn">KeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultKeyInput`<sup>Optional</sup> <a name="DefaultKeyInput" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.defaultKeyInput"></a>

```csharp
public bool|IResolvable DefaultKeyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyArnInput`<sup>Optional</sup> <a name="KeyArnInput" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.keyArnInput"></a>

```csharp
public string KeyArnInput { get; }
```

- *Type:* string

---

##### `DefaultKey`<sup>Required</sup> <a name="DefaultKey" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.defaultKey"></a>

```csharp
public bool|IResolvable DefaultKey { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.keyArn"></a>

```csharp
public string KeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightKeyRegistrationKeyRegistration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>

---




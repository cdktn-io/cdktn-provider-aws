# `guarddutyMemberDetectorFeature` Submodule <a name="`guarddutyMemberDetectorFeature` Submodule" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyMemberDetectorFeature <a name="GuarddutyMemberDetectorFeature" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature aws_guardduty_member_detector_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GuarddutyMemberDetectorFeature(Construct Scope, string Id, GuarddutyMemberDetectorFeatureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig">GuarddutyMemberDetectorFeatureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig">GuarddutyMemberDetectorFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.putAdditionalConfiguration">PutAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetAdditionalConfiguration">ResetAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalConfiguration` <a name="PutAdditionalConfiguration" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.putAdditionalConfiguration"></a>

```csharp
private void PutAdditionalConfiguration(IResolvable|GuarddutyMemberDetectorFeatureAdditionalConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.putAdditionalConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>[]

---

##### `ResetAdditionalConfiguration` <a name="ResetAdditionalConfiguration" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetAdditionalConfiguration"></a>

```csharp
private void ResetAdditionalConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GuarddutyMemberDetectorFeature resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GuarddutyMemberDetectorFeature.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GuarddutyMemberDetectorFeature.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GuarddutyMemberDetectorFeature.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GuarddutyMemberDetectorFeature.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GuarddutyMemberDetectorFeature resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GuarddutyMemberDetectorFeature to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GuarddutyMemberDetectorFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyMemberDetectorFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfiguration">AdditionalConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList">GuarddutyMemberDetectorFeatureAdditionalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfigurationInput">AdditionalConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorIdInput">DetectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorId">DetectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdditionalConfiguration`<sup>Required</sup> <a name="AdditionalConfiguration" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfiguration"></a>

```csharp
public GuarddutyMemberDetectorFeatureAdditionalConfigurationList AdditionalConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList">GuarddutyMemberDetectorFeatureAdditionalConfigurationList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AdditionalConfigurationInput`<sup>Optional</sup> <a name="AdditionalConfigurationInput" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfigurationInput"></a>

```csharp
public IResolvable|GuarddutyMemberDetectorFeatureAdditionalConfiguration[] AdditionalConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>[]

---

##### `DetectorIdInput`<sup>Optional</sup> <a name="DetectorIdInput" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorIdInput"></a>

```csharp
public string DetectorIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorId"></a>

```csharp
public string DetectorId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyMemberDetectorFeatureAdditionalConfiguration <a name="GuarddutyMemberDetectorFeatureAdditionalConfiguration" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GuarddutyMemberDetectorFeatureAdditionalConfiguration {
    string Name,
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}.

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}.

---

### GuarddutyMemberDetectorFeatureConfig <a name="GuarddutyMemberDetectorFeatureConfig" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GuarddutyMemberDetectorFeatureConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string DetectorId,
    string Name,
    string Status,
    IResolvable|GuarddutyMemberDetectorFeatureAdditionalConfiguration[] AdditionalConfiguration = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#account_id GuarddutyMemberDetectorFeature#account_id}. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.detectorId">DetectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#detector_id GuarddutyMemberDetectorFeature#detector_id}. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.additionalConfiguration">AdditionalConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>[]</code> | additional_configuration block. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#account_id GuarddutyMemberDetectorFeature#account_id}.

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.detectorId"></a>

```csharp
public string DetectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#detector_id GuarddutyMemberDetectorFeature#detector_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}.

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}.

---

##### `AdditionalConfiguration`<sup>Optional</sup> <a name="AdditionalConfiguration" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.additionalConfiguration"></a>

```csharp
public IResolvable|GuarddutyMemberDetectorFeatureAdditionalConfiguration[] AdditionalConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>[]

additional_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#additional_configuration GuarddutyMemberDetectorFeature#additional_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/guardduty_member_detector_feature#region GuarddutyMemberDetectorFeature#region}

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyMemberDetectorFeatureAdditionalConfigurationList <a name="GuarddutyMemberDetectorFeatureAdditionalConfigurationList" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GuarddutyMemberDetectorFeatureAdditionalConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.get"></a>

```csharp
private GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|GuarddutyMemberDetectorFeatureAdditionalConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>[]

---


### GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference <a name="GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GuarddutyMemberDetectorFeatureAdditionalConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>

---




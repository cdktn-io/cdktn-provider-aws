# `lambdaCodeSigningConfig` Submodule <a name="`lambdaCodeSigningConfig` Submodule" id="@cdktn/provider-aws.lambdaCodeSigningConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaCodeSigningConfig <a name="LambdaCodeSigningConfig" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config aws_lambda_code_signing_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaCodeSigningConfig(Construct Scope, string Id, LambdaCodeSigningConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig">LambdaCodeSigningConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig">LambdaCodeSigningConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers">PutAllowedPublishers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putPolicies">PutPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllowedPublishers` <a name="PutAllowedPublishers" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers"></a>

```csharp
private void PutAllowedPublishers(LambdaCodeSigningConfigAllowedPublishers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

---

##### `PutPolicies` <a name="PutPolicies" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putPolicies"></a>

```csharp
private void PutPolicies(LambdaCodeSigningConfigPolicies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaCodeSigningConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaCodeSigningConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaCodeSigningConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaCodeSigningConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaCodeSigningConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdaCodeSigningConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaCodeSigningConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaCodeSigningConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdaCodeSigningConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishers">AllowedPublishers</a></code> | <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference">LambdaCodeSigningConfigAllowedPublishersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policies">Policies</a></code> | <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference">LambdaCodeSigningConfigPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishersInput">AllowedPublishersInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policiesInput">PoliciesInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowedPublishers`<sup>Required</sup> <a name="AllowedPublishers" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishers"></a>

```csharp
public LambdaCodeSigningConfigAllowedPublishersOutputReference AllowedPublishers { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference">LambdaCodeSigningConfigAllowedPublishersOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policies"></a>

```csharp
public LambdaCodeSigningConfigPoliciesOutputReference Policies { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference">LambdaCodeSigningConfigPoliciesOutputReference</a>

---

##### `AllowedPublishersInput`<sup>Optional</sup> <a name="AllowedPublishersInput" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishersInput"></a>

```csharp
public LambdaCodeSigningConfigAllowedPublishers AllowedPublishersInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policiesInput"></a>

```csharp
public LambdaCodeSigningConfigPolicies PoliciesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaCodeSigningConfigAllowedPublishers <a name="LambdaCodeSigningConfigAllowedPublishers" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaCodeSigningConfigAllowedPublishers {
    string[] SigningProfileVersionArns
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.property.signingProfileVersionArns">SigningProfileVersionArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}. |

---

##### `SigningProfileVersionArns`<sup>Required</sup> <a name="SigningProfileVersionArns" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.property.signingProfileVersionArns"></a>

```csharp
public string[] SigningProfileVersionArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}.

---

### LambdaCodeSigningConfigConfig <a name="LambdaCodeSigningConfigConfig" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaCodeSigningConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    LambdaCodeSigningConfigAllowedPublishers AllowedPublishers,
    string Description = null,
    string Id = null,
    LambdaCodeSigningConfigPolicies Policies = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.allowedPublishers">AllowedPublishers</a></code> | <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | allowed_publishers block. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#description LambdaCodeSigningConfig#description}. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#id LambdaCodeSigningConfig#id}. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.policies">Policies</a></code> | <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a></code> | policies block. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#tags LambdaCodeSigningConfig#tags}. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#tags_all LambdaCodeSigningConfig#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowedPublishers`<sup>Required</sup> <a name="AllowedPublishers" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.allowedPublishers"></a>

```csharp
public LambdaCodeSigningConfigAllowedPublishers AllowedPublishers { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

allowed_publishers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#allowed_publishers LambdaCodeSigningConfig#allowed_publishers}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#description LambdaCodeSigningConfig#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#id LambdaCodeSigningConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.policies"></a>

```csharp
public LambdaCodeSigningConfigPolicies Policies { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#policies LambdaCodeSigningConfig#policies}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#region LambdaCodeSigningConfig#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#tags LambdaCodeSigningConfig#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#tags_all LambdaCodeSigningConfig#tags_all}.

---

### LambdaCodeSigningConfigPolicies <a name="LambdaCodeSigningConfigPolicies" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaCodeSigningConfigPolicies {
    string UntrustedArtifactOnDeployment
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies.property.untrustedArtifactOnDeployment">UntrustedArtifactOnDeployment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}. |

---

##### `UntrustedArtifactOnDeployment`<sup>Required</sup> <a name="UntrustedArtifactOnDeployment" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies.property.untrustedArtifactOnDeployment"></a>

```csharp
public string UntrustedArtifactOnDeployment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/lambda_code_signing_config#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaCodeSigningConfigAllowedPublishersOutputReference <a name="LambdaCodeSigningConfigAllowedPublishersOutputReference" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaCodeSigningConfigAllowedPublishersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArnsInput">SigningProfileVersionArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns">SigningProfileVersionArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SigningProfileVersionArnsInput`<sup>Optional</sup> <a name="SigningProfileVersionArnsInput" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArnsInput"></a>

```csharp
public string[] SigningProfileVersionArnsInput { get; }
```

- *Type:* string[]

---

##### `SigningProfileVersionArns`<sup>Required</sup> <a name="SigningProfileVersionArns" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns"></a>

```csharp
public string[] SigningProfileVersionArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue"></a>

```csharp
public LambdaCodeSigningConfigAllowedPublishers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

---


### LambdaCodeSigningConfigPoliciesOutputReference <a name="LambdaCodeSigningConfigPoliciesOutputReference" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaCodeSigningConfigPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeploymentInput">UntrustedArtifactOnDeploymentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment">UntrustedArtifactOnDeployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UntrustedArtifactOnDeploymentInput`<sup>Optional</sup> <a name="UntrustedArtifactOnDeploymentInput" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeploymentInput"></a>

```csharp
public string UntrustedArtifactOnDeploymentInput { get; }
```

- *Type:* string

---

##### `UntrustedArtifactOnDeployment`<sup>Required</sup> <a name="UntrustedArtifactOnDeployment" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment"></a>

```csharp
public string UntrustedArtifactOnDeployment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.internalValue"></a>

```csharp
public LambdaCodeSigningConfigPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

---




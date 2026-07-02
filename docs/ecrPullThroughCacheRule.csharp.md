# `ecrPullThroughCacheRule` Submodule <a name="`ecrPullThroughCacheRule` Submodule" id="@cdktn/provider-aws.ecrPullThroughCacheRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrPullThroughCacheRule <a name="EcrPullThroughCacheRule" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule aws_ecr_pull_through_cache_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcrPullThroughCacheRule(Construct Scope, string Id, EcrPullThroughCacheRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig">EcrPullThroughCacheRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig">EcrPullThroughCacheRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCredentialArn">ResetCredentialArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCustomRoleArn">ResetCustomRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetUpstreamRepositoryPrefix">ResetUpstreamRepositoryPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCredentialArn` <a name="ResetCredentialArn" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCredentialArn"></a>

```csharp
private void ResetCredentialArn()
```

##### `ResetCustomRoleArn` <a name="ResetCustomRoleArn" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCustomRoleArn"></a>

```csharp
private void ResetCustomRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetUpstreamRepositoryPrefix` <a name="ResetUpstreamRepositoryPrefix" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetUpstreamRepositoryPrefix"></a>

```csharp
private void ResetUpstreamRepositoryPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EcrPullThroughCacheRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EcrPullThroughCacheRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EcrPullThroughCacheRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EcrPullThroughCacheRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EcrPullThroughCacheRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EcrPullThroughCacheRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcrPullThroughCacheRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcrPullThroughCacheRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EcrPullThroughCacheRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.registryId">RegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArnInput">CredentialArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArnInput">CustomRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefixInput">EcrRepositoryPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrlInput">UpstreamRegistryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefixInput">UpstreamRepositoryPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArn">CredentialArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArn">CustomRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefix">EcrRepositoryPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrl">UpstreamRegistryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefix">UpstreamRepositoryPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.registryId"></a>

```csharp
public string RegistryId { get; }
```

- *Type:* string

---

##### `CredentialArnInput`<sup>Optional</sup> <a name="CredentialArnInput" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArnInput"></a>

```csharp
public string CredentialArnInput { get; }
```

- *Type:* string

---

##### `CustomRoleArnInput`<sup>Optional</sup> <a name="CustomRoleArnInput" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArnInput"></a>

```csharp
public string CustomRoleArnInput { get; }
```

- *Type:* string

---

##### `EcrRepositoryPrefixInput`<sup>Optional</sup> <a name="EcrRepositoryPrefixInput" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefixInput"></a>

```csharp
public string EcrRepositoryPrefixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `UpstreamRegistryUrlInput`<sup>Optional</sup> <a name="UpstreamRegistryUrlInput" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrlInput"></a>

```csharp
public string UpstreamRegistryUrlInput { get; }
```

- *Type:* string

---

##### `UpstreamRepositoryPrefixInput`<sup>Optional</sup> <a name="UpstreamRepositoryPrefixInput" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefixInput"></a>

```csharp
public string UpstreamRepositoryPrefixInput { get; }
```

- *Type:* string

---

##### `CredentialArn`<sup>Required</sup> <a name="CredentialArn" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArn"></a>

```csharp
public string CredentialArn { get; }
```

- *Type:* string

---

##### `CustomRoleArn`<sup>Required</sup> <a name="CustomRoleArn" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArn"></a>

```csharp
public string CustomRoleArn { get; }
```

- *Type:* string

---

##### `EcrRepositoryPrefix`<sup>Required</sup> <a name="EcrRepositoryPrefix" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefix"></a>

```csharp
public string EcrRepositoryPrefix { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `UpstreamRegistryUrl`<sup>Required</sup> <a name="UpstreamRegistryUrl" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrl"></a>

```csharp
public string UpstreamRegistryUrl { get; }
```

- *Type:* string

---

##### `UpstreamRepositoryPrefix`<sup>Required</sup> <a name="UpstreamRepositoryPrefix" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefix"></a>

```csharp
public string UpstreamRepositoryPrefix { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrPullThroughCacheRuleConfig <a name="EcrPullThroughCacheRuleConfig" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcrPullThroughCacheRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EcrRepositoryPrefix,
    string UpstreamRegistryUrl,
    string CredentialArn = null,
    string CustomRoleArn = null,
    string Id = null,
    string Region = null,
    string UpstreamRepositoryPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.ecrRepositoryPrefix">EcrRepositoryPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRegistryUrl">UpstreamRegistryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.credentialArn">CredentialArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule#credential_arn EcrPullThroughCacheRule#credential_arn}. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.customRoleArn">CustomRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule#custom_role_arn EcrPullThroughCacheRule#custom_role_arn}. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}. |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRepositoryPrefix">UpstreamRepositoryPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule#upstream_repository_prefix EcrPullThroughCacheRule#upstream_repository_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EcrRepositoryPrefix`<sup>Required</sup> <a name="EcrRepositoryPrefix" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.ecrRepositoryPrefix"></a>

```csharp
public string EcrRepositoryPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}.

---

##### `UpstreamRegistryUrl`<sup>Required</sup> <a name="UpstreamRegistryUrl" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRegistryUrl"></a>

```csharp
public string UpstreamRegistryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}.

---

##### `CredentialArn`<sup>Optional</sup> <a name="CredentialArn" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.credentialArn"></a>

```csharp
public string CredentialArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule#credential_arn EcrPullThroughCacheRule#credential_arn}.

---

##### `CustomRoleArn`<sup>Optional</sup> <a name="CustomRoleArn" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.customRoleArn"></a>

```csharp
public string CustomRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule#custom_role_arn EcrPullThroughCacheRule#custom_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule#region EcrPullThroughCacheRule#region}

---

##### `UpstreamRepositoryPrefix`<sup>Optional</sup> <a name="UpstreamRepositoryPrefix" id="@cdktn/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRepositoryPrefix"></a>

```csharp
public string UpstreamRepositoryPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ecr_pull_through_cache_rule#upstream_repository_prefix EcrPullThroughCacheRule#upstream_repository_prefix}.

---




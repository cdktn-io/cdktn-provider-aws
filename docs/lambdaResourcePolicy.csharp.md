# `lambdaResourcePolicy` Submodule <a name="`lambdaResourcePolicy` Submodule" id="@cdktn/provider-aws.lambdaResourcePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaResourcePolicy <a name="LambdaResourcePolicy" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/lambda_resource_policy aws_lambda_resource_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaResourcePolicy(Construct Scope, string Id, LambdaResourcePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig">LambdaResourcePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig">LambdaResourcePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaResourcePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaResourcePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaResourcePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaResourcePolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaResourcePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdaResourcePolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaResourcePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaResourcePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/lambda_resource_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdaResourcePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.revisionId">RevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.revisionId"></a>

```csharp
public string RevisionId { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaResourcePolicyConfig <a name="LambdaResourcePolicyConfig" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaResourcePolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Policy,
    string ResourceArn,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.policy">Policy</a></code> | <code>string</code> | JSON-formatted resource-based policy document to attach to the Lambda resource. |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.resourceArn">ResourceArn</a></code> | <code>string</code> | ARN of the Lambda function, version, or alias to attach the resource-based policy to. |
| <code><a href="#@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

JSON-formatted resource-based policy document to attach to the Lambda resource.

This replaces the entire policy, including any statements added with aws_lambda_permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/lambda_resource_policy#policy LambdaResourcePolicy#policy}

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

ARN of the Lambda function, version, or alias to attach the resource-based policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/lambda_resource_policy#resource_arn LambdaResourcePolicy#resource_arn}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lambdaResourcePolicy.LambdaResourcePolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/lambda_resource_policy#region LambdaResourcePolicy#region}

---




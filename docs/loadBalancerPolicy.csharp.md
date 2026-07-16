# `loadBalancerPolicy` Submodule <a name="`loadBalancerPolicy` Submodule" id="@cdktn/provider-aws.loadBalancerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerPolicy <a name="LoadBalancerPolicy" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy aws_load_balancer_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LoadBalancerPolicy(Construct Scope, string Id, LoadBalancerPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig">LoadBalancerPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig">LoadBalancerPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.putPolicyAttribute">PutPolicyAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetPolicyAttribute">ResetPolicyAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicyAttribute` <a name="PutPolicyAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.putPolicyAttribute"></a>

```csharp
private void PutPolicyAttribute(IResolvable|LoadBalancerPolicyPolicyAttribute[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.putPolicyAttribute.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>[]

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicyAttribute` <a name="ResetPolicyAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetPolicyAttribute"></a>

```csharp
private void ResetPolicyAttribute()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LoadBalancerPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LoadBalancerPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LoadBalancerPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LoadBalancerPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LoadBalancerPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LoadBalancerPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancerPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancerPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LoadBalancerPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyAttribute">PolicyAttribute</a></code> | <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList">LoadBalancerPolicyPolicyAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.loadBalancerNameInput">LoadBalancerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyAttributeInput">PolicyAttributeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyNameInput">PolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyTypeNameInput">PolicyTypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.loadBalancerName">LoadBalancerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyTypeName">PolicyTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PolicyAttribute`<sup>Required</sup> <a name="PolicyAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyAttribute"></a>

```csharp
public LoadBalancerPolicyPolicyAttributeList PolicyAttribute { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList">LoadBalancerPolicyPolicyAttributeList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerNameInput`<sup>Optional</sup> <a name="LoadBalancerNameInput" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.loadBalancerNameInput"></a>

```csharp
public string LoadBalancerNameInput { get; }
```

- *Type:* string

---

##### `PolicyAttributeInput`<sup>Optional</sup> <a name="PolicyAttributeInput" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyAttributeInput"></a>

```csharp
public IResolvable|LoadBalancerPolicyPolicyAttribute[] PolicyAttributeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>[]

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyNameInput"></a>

```csharp
public string PolicyNameInput { get; }
```

- *Type:* string

---

##### `PolicyTypeNameInput`<sup>Optional</sup> <a name="PolicyTypeNameInput" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyTypeNameInput"></a>

```csharp
public string PolicyTypeNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.loadBalancerName"></a>

```csharp
public string LoadBalancerName { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `PolicyTypeName`<sup>Required</sup> <a name="PolicyTypeName" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyTypeName"></a>

```csharp
public string PolicyTypeName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerPolicyConfig <a name="LoadBalancerPolicyConfig" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LoadBalancerPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LoadBalancerName,
    string PolicyName,
    string PolicyTypeName,
    string Id = null,
    IResolvable|LoadBalancerPolicyPolicyAttribute[] PolicyAttribute = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.loadBalancerName">LoadBalancerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#load_balancer_name LoadBalancerPolicy#load_balancer_name}. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyName">PolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#policy_name LoadBalancerPolicy#policy_name}. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyTypeName">PolicyTypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#policy_type_name LoadBalancerPolicy#policy_type_name}. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#id LoadBalancerPolicy#id}. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyAttribute">PolicyAttribute</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>[]</code> | policy_attribute block. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.loadBalancerName"></a>

```csharp
public string LoadBalancerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#load_balancer_name LoadBalancerPolicy#load_balancer_name}.

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyName"></a>

```csharp
public string PolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#policy_name LoadBalancerPolicy#policy_name}.

---

##### `PolicyTypeName`<sup>Required</sup> <a name="PolicyTypeName" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyTypeName"></a>

```csharp
public string PolicyTypeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#policy_type_name LoadBalancerPolicy#policy_type_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#id LoadBalancerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyAttribute`<sup>Optional</sup> <a name="PolicyAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyAttribute"></a>

```csharp
public IResolvable|LoadBalancerPolicyPolicyAttribute[] PolicyAttribute { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>[]

policy_attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#policy_attribute LoadBalancerPolicy#policy_attribute}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#region LoadBalancerPolicy#region}

---

### LoadBalancerPolicyPolicyAttribute <a name="LoadBalancerPolicyPolicyAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LoadBalancerPolicyPolicyAttribute {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#name LoadBalancerPolicy#name}. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#value LoadBalancerPolicy#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#name LoadBalancerPolicy#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/load_balancer_policy#value LoadBalancerPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerPolicyPolicyAttributeList <a name="LoadBalancerPolicyPolicyAttributeList" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LoadBalancerPolicyPolicyAttributeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.get"></a>

```csharp
private LoadBalancerPolicyPolicyAttributeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerPolicyPolicyAttribute[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>[]

---


### LoadBalancerPolicyPolicyAttributeOutputReference <a name="LoadBalancerPolicyPolicyAttributeOutputReference" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LoadBalancerPolicyPolicyAttributeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerPolicyPolicyAttribute InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>

---




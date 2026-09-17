# `fisSafetyLeverState` Submodule <a name="`fisSafetyLeverState` Submodule" id="@cdktn/provider-aws.fisSafetyLeverState"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FisSafetyLeverState <a name="FisSafetyLeverState" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/fis_safety_lever_state aws_fis_safety_lever_state}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer"></a>

```typescript
import { fisSafetyLeverState } from '@cdktn/provider-aws'

new fisSafetyLeverState.FisSafetyLeverState(scope: Construct, id: string, config?: FisSafetyLeverStateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig">FisSafetyLeverStateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig">FisSafetyLeverStateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putState">putState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putState` <a name="putState" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putState"></a>

```typescript
public putState(value: IResolvable | FisSafetyLeverStateState[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putState.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putTimeouts"></a>

```typescript
public putTimeouts(value: FisSafetyLeverStateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FisSafetyLeverState resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isConstruct"></a>

```typescript
import { fisSafetyLeverState } from '@cdktn/provider-aws'

fisSafetyLeverState.FisSafetyLeverState.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformElement"></a>

```typescript
import { fisSafetyLeverState } from '@cdktn/provider-aws'

fisSafetyLeverState.FisSafetyLeverState.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformResource"></a>

```typescript
import { fisSafetyLeverState } from '@cdktn/provider-aws'

fisSafetyLeverState.FisSafetyLeverState.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport"></a>

```typescript
import { fisSafetyLeverState } from '@cdktn/provider-aws'

fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FisSafetyLeverState resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FisSafetyLeverState to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FisSafetyLeverState that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/fis_safety_lever_state#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FisSafetyLeverState to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.state">state</a></code> | <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList">FisSafetyLeverStateStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference">FisSafetyLeverStateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.stateInput">stateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.state"></a>

```typescript
public readonly state: FisSafetyLeverStateStateList;
```

- *Type:* <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList">FisSafetyLeverStateStateList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.timeouts"></a>

```typescript
public readonly timeouts: FisSafetyLeverStateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference">FisSafetyLeverStateTimeoutsOutputReference</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.stateInput"></a>

```typescript
public readonly stateInput: IResolvable | FisSafetyLeverStateState[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FisSafetyLeverStateTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FisSafetyLeverStateConfig <a name="FisSafetyLeverStateConfig" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.Initializer"></a>

```typescript
import { fisSafetyLeverState } from '@cdktn/provider-aws'

const fisSafetyLeverStateConfig: fisSafetyLeverState.FisSafetyLeverStateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.state">state</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>[]</code> | state block. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/fis_safety_lever_state#region FisSafetyLeverState#region}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.state"></a>

```typescript
public readonly state: IResolvable | FisSafetyLeverStateState[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>[]

state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/fis_safety_lever_state#state FisSafetyLeverState#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FisSafetyLeverStateTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/fis_safety_lever_state#timeouts FisSafetyLeverState#timeouts}

---

### FisSafetyLeverStateState <a name="FisSafetyLeverStateState" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.Initializer"></a>

```typescript
import { fisSafetyLeverState } from '@cdktn/provider-aws'

const fisSafetyLeverStateState: fisSafetyLeverState.FisSafetyLeverStateState = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.property.reason">reason</a></code> | <code>string</code> | Reason for the current status of the safety lever. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.property.status">status</a></code> | <code>string</code> | State of the safety lever. Valid values: engaged, disengaged. |

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

Reason for the current status of the safety lever.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/fis_safety_lever_state#reason FisSafetyLeverState#reason}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

State of the safety lever. Valid values: engaged, disengaged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/fis_safety_lever_state#status FisSafetyLeverState#status}

---

### FisSafetyLeverStateTimeouts <a name="FisSafetyLeverStateTimeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.Initializer"></a>

```typescript
import { fisSafetyLeverState } from '@cdktn/provider-aws'

const fisSafetyLeverStateTimeouts: fisSafetyLeverState.FisSafetyLeverStateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/fis_safety_lever_state#create FisSafetyLeverState#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/fis_safety_lever_state#update FisSafetyLeverState#update}

---

## Classes <a name="Classes" id="Classes"></a>

### FisSafetyLeverStateStateList <a name="FisSafetyLeverStateStateList" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer"></a>

```typescript
import { fisSafetyLeverState } from '@cdktn/provider-aws'

new fisSafetyLeverState.FisSafetyLeverStateStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.get"></a>

```typescript
public get(index: number): FisSafetyLeverStateStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisSafetyLeverStateState[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>[]

---


### FisSafetyLeverStateStateOutputReference <a name="FisSafetyLeverStateStateOutputReference" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer"></a>

```typescript
import { fisSafetyLeverState } from '@cdktn/provider-aws'

new fisSafetyLeverState.FisSafetyLeverStateStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.reasonInput">reasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reasonInput`<sup>Optional</sup> <a name="reasonInput" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.reasonInput"></a>

```typescript
public readonly reasonInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisSafetyLeverStateState;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>

---


### FisSafetyLeverStateTimeoutsOutputReference <a name="FisSafetyLeverStateTimeoutsOutputReference" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer"></a>

```typescript
import { fisSafetyLeverState } from '@cdktn/provider-aws'

new fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisSafetyLeverStateTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a>

---




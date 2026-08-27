# `pinpointsmsvoicev2Keyword` Submodule <a name="`pinpointsmsvoicev2Keyword` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2Keyword <a name="Pinpointsmsvoicev2Keyword" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword aws_pinpointsmsvoicev2_keyword}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer"></a>

```typescript
import { pinpointsmsvoicev2Keyword } from '@cdktn/provider-aws'

new pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword(scope: Construct, id: string, config: Pinpointsmsvoicev2KeywordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig">Pinpointsmsvoicev2KeywordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig">Pinpointsmsvoicev2KeywordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetKeywordAction">resetKeywordAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetKeywordAction` <a name="resetKeywordAction" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetKeywordAction"></a>

```typescript
public resetKeywordAction(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2Keyword resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isConstruct"></a>

```typescript
import { pinpointsmsvoicev2Keyword } from '@cdktn/provider-aws'

pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformElement"></a>

```typescript
import { pinpointsmsvoicev2Keyword } from '@cdktn/provider-aws'

pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformResource"></a>

```typescript
import { pinpointsmsvoicev2Keyword } from '@cdktn/provider-aws'

pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport"></a>

```typescript
import { pinpointsmsvoicev2Keyword } from '@cdktn/provider-aws'

pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Pinpointsmsvoicev2Keyword resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Pinpointsmsvoicev2Keyword to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Pinpointsmsvoicev2Keyword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2Keyword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordActionInput">keywordActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordInput">keywordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordMessageInput">keywordMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.originationIdentityArnInput">originationIdentityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keyword">keyword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordAction">keywordAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordMessage">keywordMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.originationIdentityArn">originationIdentityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keywordActionInput`<sup>Optional</sup> <a name="keywordActionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordActionInput"></a>

```typescript
public readonly keywordActionInput: string;
```

- *Type:* string

---

##### `keywordInput`<sup>Optional</sup> <a name="keywordInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordInput"></a>

```typescript
public readonly keywordInput: string;
```

- *Type:* string

---

##### `keywordMessageInput`<sup>Optional</sup> <a name="keywordMessageInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordMessageInput"></a>

```typescript
public readonly keywordMessageInput: string;
```

- *Type:* string

---

##### `originationIdentityArnInput`<sup>Optional</sup> <a name="originationIdentityArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.originationIdentityArnInput"></a>

```typescript
public readonly originationIdentityArnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keyword"></a>

```typescript
public readonly keyword: string;
```

- *Type:* string

---

##### `keywordAction`<sup>Required</sup> <a name="keywordAction" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordAction"></a>

```typescript
public readonly keywordAction: string;
```

- *Type:* string

---

##### `keywordMessage`<sup>Required</sup> <a name="keywordMessage" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordMessage"></a>

```typescript
public readonly keywordMessage: string;
```

- *Type:* string

---

##### `originationIdentityArn`<sup>Required</sup> <a name="originationIdentityArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.originationIdentityArn"></a>

```typescript
public readonly originationIdentityArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2KeywordConfig <a name="Pinpointsmsvoicev2KeywordConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.Initializer"></a>

```typescript
import { pinpointsmsvoicev2Keyword } from '@cdktn/provider-aws'

const pinpointsmsvoicev2KeywordConfig: pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keyword">keyword</a></code> | <code>string</code> | Keyword to configure. 1-30 characters, upper-case, and cannot start or end with a space. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keywordMessage">keywordMessage</a></code> | <code>string</code> | Message to send when the keyword is received. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.originationIdentityArn">originationIdentityArn</a></code> | <code>string</code> | ARN of the origination identity (phone number or pool) to attach the keyword to. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keywordAction">keywordAction</a></code> | <code>string</code> | Action to perform when the keyword is received. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keyword"></a>

```typescript
public readonly keyword: string;
```

- *Type:* string

Keyword to configure. 1-30 characters, upper-case, and cannot start or end with a space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#keyword Pinpointsmsvoicev2Keyword#keyword}

---

##### `keywordMessage`<sup>Required</sup> <a name="keywordMessage" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keywordMessage"></a>

```typescript
public readonly keywordMessage: string;
```

- *Type:* string

Message to send when the keyword is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#keyword_message Pinpointsmsvoicev2Keyword#keyword_message}

---

##### `originationIdentityArn`<sup>Required</sup> <a name="originationIdentityArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.originationIdentityArn"></a>

```typescript
public readonly originationIdentityArn: string;
```

- *Type:* string

ARN of the origination identity (phone number or pool) to attach the keyword to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#origination_identity_arn Pinpointsmsvoicev2Keyword#origination_identity_arn}

---

##### `keywordAction`<sup>Optional</sup> <a name="keywordAction" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keywordAction"></a>

```typescript
public readonly keywordAction: string;
```

- *Type:* string

Action to perform when the keyword is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#keyword_action Pinpointsmsvoicev2Keyword#keyword_action}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#region Pinpointsmsvoicev2Keyword#region}

---




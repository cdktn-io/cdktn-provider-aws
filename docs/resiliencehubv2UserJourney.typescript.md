# `resiliencehubv2UserJourney` Submodule <a name="`resiliencehubv2UserJourney` Submodule" id="@cdktn/provider-aws.resiliencehubv2UserJourney"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2UserJourney <a name="Resiliencehubv2UserJourney" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_user_journey aws_resiliencehubv2_user_journey}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.Initializer"></a>

```typescript
import { resiliencehubv2UserJourney } from '@cdktn/provider-aws'

new resiliencehubv2UserJourney.Resiliencehubv2UserJourney(scope: Construct, id: string, config: Resiliencehubv2UserJourneyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig">Resiliencehubv2UserJourneyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig">Resiliencehubv2UserJourneyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.resetPolicyArn">resetPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPolicyArn` <a name="resetPolicyArn" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.resetPolicyArn"></a>

```typescript
public resetPolicyArn(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2UserJourney resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isConstruct"></a>

```typescript
import { resiliencehubv2UserJourney } from '@cdktn/provider-aws'

resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isTerraformElement"></a>

```typescript
import { resiliencehubv2UserJourney } from '@cdktn/provider-aws'

resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isTerraformResource"></a>

```typescript
import { resiliencehubv2UserJourney } from '@cdktn/provider-aws'

resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.generateConfigForImport"></a>

```typescript
import { resiliencehubv2UserJourney } from '@cdktn/provider-aws'

resiliencehubv2UserJourney.Resiliencehubv2UserJourney.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Resiliencehubv2UserJourney resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Resiliencehubv2UserJourney to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Resiliencehubv2UserJourney that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_user_journey#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2UserJourney to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.userJourneyId">userJourneyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.policyArnInput">policyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.systemArnInput">systemArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.systemArn">systemArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `userJourneyId`<sup>Required</sup> <a name="userJourneyId" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.userJourneyId"></a>

```typescript
public readonly userJourneyId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyArnInput`<sup>Optional</sup> <a name="policyArnInput" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.policyArnInput"></a>

```typescript
public readonly policyArnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `systemArnInput`<sup>Optional</sup> <a name="systemArnInput" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.systemArnInput"></a>

```typescript
public readonly systemArnInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `systemArn`<sup>Required</sup> <a name="systemArn" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.systemArn"></a>

```typescript
public readonly systemArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2UserJourneyConfig <a name="Resiliencehubv2UserJourneyConfig" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.Initializer"></a>

```typescript
import { resiliencehubv2UserJourney } from '@cdktn/provider-aws'

const resiliencehubv2UserJourneyConfig: resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_user_journey#name Resiliencehubv2UserJourney#name}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.systemArn">systemArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_user_journey#system_arn Resiliencehubv2UserJourney#system_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_user_journey#description Resiliencehubv2UserJourney#description}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.policyArn">policyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_user_journey#policy_arn Resiliencehubv2UserJourney#policy_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_user_journey#name Resiliencehubv2UserJourney#name}.

---

##### `systemArn`<sup>Required</sup> <a name="systemArn" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.systemArn"></a>

```typescript
public readonly systemArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_user_journey#system_arn Resiliencehubv2UserJourney#system_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_user_journey#description Resiliencehubv2UserJourney#description}.

---

##### `policyArn`<sup>Optional</sup> <a name="policyArn" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_user_journey#policy_arn Resiliencehubv2UserJourney#policy_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_user_journey#region Resiliencehubv2UserJourney#region}

---



